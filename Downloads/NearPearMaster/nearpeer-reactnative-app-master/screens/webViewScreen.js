import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Platform,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer,useIsFocused , useFocusEffect} from '@react-navigation/native';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {Header} from 'react-native/Libraries/NewAppScreen';
import store from './../store/store';
import {
  storeVideoData,
  setUser,
  getVideoData,
  getVideoInfo,
  setUserToken,
  setUID,
  setDownloadedID,
  getDownloadedID,
} from './../common/commonMethods';
import * as actionCreator from './../store/actionsCreator';
import {Button} from 'react-native-elements/dist/buttons/Button';
import PushNotification, {Importance} from 'react-native-push-notification';

const RNFS = require('react-native-fs');

const WebViewScreen = props => {
  const [canGoBack, setCanGoBack] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [stateNavigation, setstateNavigation] = useState(false);
  const [videoID, setVideoID] = useState(0);
  const [videoData, setVideoData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [webviewRef, setWebviewRef] = useState('');
  const [downloadLink, setDownloadLink] = useState('');
  const rerender = useIsFocused();

  useEffect(() => {
    // checkDownloads();
  // AsyncStorage.clear();
    // setstateNavigation(navigationState.loading);
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      };
    }
  },[rerender]);

  // INITIALIZE ONLY ONCE
  const checkDownloads = async () => {
    console.log('IN CHECK DWN');
    await getDownloadedID().then(res => {
      console.log('WWWWW', res);
      webviewRef.injectJavaScript(
        getInjectableJSMessage({
          message: res,
          triggeredAt: new Date(),
        }),
      );
    });
  };
  const HandleBackPressed = () => {
    if (webviewRef) {
      console.log(webviewRef, 'WEB VIEW REF');
      webviewRef.goBack();
      return true; // PREVENT DEFAULT BEHAVIOUR (EXITING THE APP)
    }
    return false;
  };
  const debugging = `
  const consoleLog = (type, log) => window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
  console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
    };
`;

  const onMessage = async payload => {
    let dataPayload;
    try {
      dataPayload = JSON.parse(payload.nativeEvent.data);
    } catch (e) {}

    if (dataPayload) {
      if (dataPayload.type === 'Console') {
        console.log('MY CHECK', dataPayload.data.log);
        // console.info(`[Console] ${JSON.stringify(dataPayload.data)}`);

        if (dataPayload.data.log === 'loggedIn') {
          checkLogin();
        }
        if (dataPayload.data.log === 'loggedInGuest') {
          checkLogin();
        }
        if (dataPayload.data.log === 'signedUp') {
          checkLogin();
        }
        if (dataPayload.data.log === 'loggedOut') {
          console.log("IN LOGOUT");
         await removeLogin();
          AsyncStorage.clear();
        }
        if (dataPayload.data.log.includes('userID')) {
          console.log('USER ID', dataPayload.data.log);
          const id = await dataPayload.data.log.split('userID');
          console.log('ID', id[1]);
          setUID(id[1]);
        }
        if (dataPayload.data.log.includes('userToken')) {
          const id = await dataPayload.data.log.split('userToken');
          console.log('ID', id[1]);
          setUserToken(id[1]);
        }
        if (dataPayload.data.log.includes('videoID')) {
          console.log('VIDEO ID', dataPayload.data.log);
          const id = await dataPayload.data.log.split('videoID');
          console.log('ID', id[1]);
          setDownloadedID(id[1]);
          setVideoID(id[1]);

          try {
            webviewRef.injectJavaScript(
              getInjectableJSMessage({
                message: 'downloadStarted',
                triggeredAt: new Date(),
              }),
            );
            var response = await getVideoInfo(id[1]);
            console.log('API RESPONSE', response);
            downloadVideo(response.data.videoData);
          } catch (e) {
            webviewRef.injectJavaScript(
              getInjectableJSMessage({
                message: 'downloadFailed',
                triggeredAt: new Date(),
              }),
            );
            console.log('Error', e);
          }
        }
      } else {
        console.log('MY CHECK else', dataPayload);
      }
    } else {
      console.log('NOTHING IN CONSOLE');
    }
  };
  const _showAlert = () => {
    Alert.alert(
      'Download',
      'Video Downloaded',
      [
        {
          text: 'Continue',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Go to Downloads',
          onPress: () => props.navigation.navigate('Downloads', {videoData}),
        },
      ],
      {cancelable: false},
    );
  };
  const downloadVideo = data => {
    console.log('---DOWNLOAD VIDEO----', progress);

    var videoLink = data.links[0].link;

    // https://player.vimeo.com/external/453448163.sd.mp4?s=9cc06ca33be8e7a147fb9344922fea56459563dd&profile_id=164&oauth2_token_id=1459080889
    RNFS.downloadFile({
      fromUrl: videoLink,
      toFile: `${RNFS.DocumentDirectoryPath}/` + data.video_name,
      background: true,
      // progress: (res) => {console.log("IN FS PROG",res)},
      progress: res =>
        _downloadFileProgress(
          res,
          `${RNFS.DocumentDirectoryPath}/` + data.video_name,
          data,
        ),
      cacheable: true,
      progressDivider: 1,
    })
      .promise.then(async res => {
        console.log(`${RNFS.DocumentDirectoryPath}/` + data.video_name);
        var path = RNFS.DocumentDirectoryPath + '/' + data.video_name;
        console.log('On Video Download THEN', path);
        console.log('VIDEO DATA SHOW', videoData);
        data.downloadedPath = path;

        await storeVideoData(data);
        webviewRef.postMessage('downloadCompleted');

        webviewRef.injectJavaScript(
          getInjectableJSMessage({
            message: 'downloadCompleted',
            triggeredAt: new Date(),
          }),
        );
        _showAlert();
        // storeVideoData(path);
        setProgress(0);
        // props.navigation.navigate("Downloads", {path});
      })
      .catch(function (error) {
        console.log('Network Error ' + error);
      });
  };
  const _downloadFileProgress = async (data, directory, vidData) => {
    const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
    const text = `Progress ${percentage}%`;
    PushNotification.localNotification({
      channelId: 'example-channel', // (required) channelId, if the channel doesn't exist, notification will not trigger.
      /* iOS and Android properties */
      id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: 'Downloading', // (optional)
      message: text, // (required)for Android. default: undefined
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It );
    });
    setProgress(text);
    console.log(text);
    if (percentage === 100) {
      webviewRef.postMessage('downloadCompleted');
      console.log('VIDEO DATA SHOW', vidData);
      console.log('DOWNLOAD COMPLETE PROGRESS', percentage);
    }
  };
  const getInjectableJSMessage = message => {
    return `
      (function() {
        document.dispatchEvent(new MessageEvent('message', {
          data: ${JSON.stringify(message)}
        }));
      })();
    `;
  };
  const checkLogin = async () => {
    try {
      setUser(true);
      store.dispatch(actionCreator.updateAuthStatus(true));
    } catch (error) {
      // Error saving data
      console.log('ERROR SAVING DATA');
    }
  };

  const removeLogin = async status => {
    try {
      setUser(false);
      store.dispatch(actionCreator.updateAuthStatus(false));
    } catch (error) {
      // Error saving data
      console.log('ERROR Removing DATA');
    }
  };

  const clientResponseCode = `
window.postMessage("testing", "*");
true;
`;

  const onNavigationStateChange = async navigationState => {
    console.log('Navigation State Change', navigationState.url);
    setstateNavigation(navigationState.loading);

    if (navigationState.url === 'https://currentlms.nearpeer.org/downloadApp/') {
      console.log('IN DOWNLOAD APP+++++++++++++');
      props.navigation.navigate('Downloads');
    }
  };
  // uri: 'https://lms.nearpeer.org'
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <WebView
          allowFileAccess={true}
          androidHardwareAccelerationDisabled={true}
          allowsFullscreenVideo={true}
          source={{uri: 'https://currentlms.nearpeer.org'}}
          header={'React-Native-App-LMS'}
          originWhitelist={['https://*', 'http://*', 'file://*', 'sms://*']}
          ref={webView => setWebviewRef(webView)}
          userAgent="React-Native-NP" // Changes in LMS are done on the basis of this User agent.
          onMessage={onMessage} //for catching web-view events.  javaScriptEnabledAndroid={true}
          injectedJavaScript={debugging} //for showing logs in onMessage
          onNavigationStateChange={state => onNavigationStateChange(state)}
          onLoadEnd={() => webviewRef.postMessage('client_token')}
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
        />
      </View>
      {stateNavigation && (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffffa6',
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              flex: 1,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./../assets/website_loading_animation.gif')}
              style={{width: 200, height: 200}}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default WebViewScreen;
