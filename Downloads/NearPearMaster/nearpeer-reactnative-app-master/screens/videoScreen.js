import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Platform,
  Image,
  StyleSheet,
} from 'react-native';
import store from './../store/store';
import * as actionCreator from './../store/actionsCreator';

import Video from 'react-native-video';
// import Video from 'react-native-af-video-player'

import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {NavigationContainer} from '@react-navigation/native';
import {WebView, WebViewNavigation} from 'react-native-webview';
import {HandleBackPressed} from '../common/commonMethods';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import VideoListing from './videoListing';

const VideoPageScreen = props => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [videoData,setVideoData] = useState([]);
  console.log('IN VIDEO PAGE', props);
  console.log('PLAYER SCREEN', props.route.params.data);
  // setVideoData( props.route.params.data);
  var videodata= props.route.params.data;

  var video_path = props.route.params.data.downloadedPath;
  const sourceUri = {uri: video_path};

  let player = useRef();
  const [screenType, setScreenType] = useState('content');

  const onSeek = seek => {
    //Handler for change in seekbar
    console.log('SEEk', seek);
    setPlayerState(PLAYER_STATES.PLAYING);
    // player.current.seek(seek);
  };

  const onPaused = playerState => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    player.current.seek(0);
  };

  const onProgress = data => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = data => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = data => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onError = () => alert('Oh! ', error);

  const exitFullScreen = () => {
    alert('Exit full screen');
  };

  const enterFullScreen = () => {};

  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == 'content') setScreenType('cover');
    else setScreenType('content');
  };

  const onSeeking = currentTime => setCurrentTime(currentTime);
  useEffect(() => {
    // setstateNavigation(navigationState.loading);
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      };
    }
  }, []);

  const HandleBackPressed = () => {
    props.navigation.navigate('WebViewScreen');
    
  };
  const download = async props => {
    store.dispatch(actionCreator.updateAuthStatus(false));

    console.log('IN DOWNLOAD');
  };
  const url = 'https://your-url.com '
  const logo = 'https://your-url.com/logo.png'
  const placeholder = 'https://your-url.com/placeholder.png'
  const title = 'My video title'

  const onFullScreenn=(status)=> {
    // Set the params to pass in the fullscreen status to navigationOptions
    this.props.navigation.setParams({
      fullscreen: !status
    })
  }

  const onMorePress=()=> {
    Alert.alert(
      'Boom',
      'This is an action call!',
      [{ text: 'Aw yeah!' }]
    )
  }
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        // alignSelf: 'center',
        // justifyContent: 'center',
      }}>
      {/* <Video
        source={{uri: "https://www.youtube.com/watch?v=SPlvYNkhMLA"}}
        style={{width: 300, height: 300}}
        onBuffer={console.log('CHECK VIDEO')}
        controls={true}
        onEnd={console.log('END')}
        onLoadStart={console.log('LOAD')}
        onProgress={console.log('PROGRESS')}
        paused={console.log('PAUSE')}
        video_path}
      /> */}
      {/* <Video
          autoPlay
          url={url}
          style={{width: '100%', height: 280, backgroundColor: '#EAEAEA',color:"red"}}
          title={title}
          logo={logo}
          placeholder={placeholder}
          onMorePress={() => this.onMorePress()}
          onFullScreen={status => this.onFullScreenn(status)}
          fullScreenOnly
        /> */}
     

     <View style={{width: '100%', height: 285,borderColor:'red',borderWidth:2}}>


      <Video
        source={{
          uri: video_path,
        }}
        style={{width: '100%', height: 280, backgroundColor: '#EAEAEA',position:'absolute',top: 0,
        left: 0,
        bottom: 0,
        right: 0,}}
        controls={true}
       
        onEnd={onEnd}
        onLoad={onLoad}
        onLoadStart={onLoadStart}
        onProgress={onProgress}
        pictureInPicture={true}
        
        poster={
          'https://nearpeer-imagees.s3.amazonaws.com/undefined/website_loading_animation-1628251885281.gif'
        }
        // fullscreen={true}
        // fullscreenOrientation="landscape"
        posterResizeMode="contain"
        rotateToFullScreen
        rate={1.0}
        stereoPan={0.0}



        // onFullscreenPlayerWillPresent={} when player is about to enter fullscreen
        // onFullscreenPlayerDidPresent when player has entered
        // onFullscreenPlayerWillDismiss when player is about to leave fullscreen
        // onFullscreenPlayerDidDismiss when player has left fullscreen
        // fullscreen ={true}
        // fullscreenAutorotate={true}
        // onEnd={console.log('END')}
        // onLoadStart={console.log('LOAD')}
        // onProgress={console.log('PROGRESS')}
        // paused={console.log('PAUSE')}
        resizeMode="stretch"
        onError={err => console.log('ERROR', err)}
      />
      <TouchableOpacity>
      <Text>hi</Text>
      </TouchableOpacity>
      
       

</View>
        

        

      {/* onFullScreen={noop}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={onSeeking} 
             style={styles.toolbar}  */}

      {/* <MediaControls
        isFullScreen={isFullScreen}
        duration={duration}
        isLoading={isLoading}
        mainColor="orange"
        playerState={playerState}
        progress={currentTime}
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={props => onSeek(props)}
        onSeeking={props =>  onSeeking(props)}
      >
        <MediaControls.Toolbar>
   
          <View >
            <Text>I'm a custom toolbar </Text>
          </View>
        </MediaControls.Toolbar>
      </MediaControls> */}
    <View>
      <Text style={styles.videoNameText}>{videodata.video_name}</Text>

      <View style={styles.disabled}>
        <View style={styles.disabled_icons}>
          <View style={styles.disabled_images}>
            <Image source={require('./../assets/like_icon.png')} />
          </View>
          <Text style={styles.disabled_text}>Like</Text>
        </View>
        <View style={styles.disabled_icons}>
          <View style={styles.disabled_images}>
          <Image
            source={require('./../assets/share_icon.png')}
          />
          </View>
          
          <Text style={styles.disabled_text}>Share</Text>
        </View>
        <View style={styles.disabled_icons}>
          <View style={styles.disabled_images}>
          <Image
            source={require('./../assets/download_notes.png')}
          />
          </View>
          <Text style={styles.disabled_text}>Notes</Text>
        </View>
        <View style={styles.disabled_icons_download}>
          <View style={styles.disabled_images}>
          <Image
            source={require('./../assets/downloaded_icon.png')}
          />
          </View>
          <Text style={styles.disabled_text}>Downloaded</Text>
        </View>

        <View style={styles.disabled_icons}>
         <View style={styles.disabled_images}>
         <Image
            source={require('./../assets/report_icon.png')}
          />
         </View>
          <Text style={styles.disabled_text}>Report</Text>
        </View>
      </View>
      </View>

      {/* <View>
        <VideoListing />
      </View> */}
    </View>
  );
};
export default VideoPageScreen;
const styles = StyleSheet.create({
  disabled: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
  },
  disabled_icons: {
    alignItems: 'center',
    opacity: 0.3,
  },
  disabled_icons_download: {
    alignItems: 'center',
  },
  disabled_images: {
    height: 28,
  },
  disabled_text: {
    marginTop: 5,
  },
  videoNameText: {
    fontSize: 24,
    fontWeight: '400',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    maxHeight: 70,
    overflow: 'hidden',
  },
});
