import React, {useRef, useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  BackHandler,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import {Linking} from 'react-native';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import {NavigationContainer,useIsFocused , useFocusEffect} from '@react-navigation/native';
import {getVideoData, storeVideoData,deleteVideo} from './../common/commonMethods';
const RNFS = require('react-native-fs');

const VideoListing = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDuration, setVideoDuration] = useState('');
  const [videoData, setVideoData] = useState([]);
  const [moduleData, setModuleData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [minus, setMinus] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(true);
  const [expandedModule, setExpandedModule] = useState(true);
  const [currentVideoId, setCurrentVideoId] = useState(0);
  const [currentModuleId, setCurrentModuleId] = useState(0);
  const [currentCourseId, setCurrentCourseId] = useState(0);
  const [deleteDiv, setDeleteDiv] = useState(false);
  const rerender = useIsFocused();

  useEffect(() => {
    getFilesfromLocalStorage();
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', HandleBackPressed);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', HandleBackPressed);
      };
    }
    // setMinus(false)
  },[rerender,minus]);
 
  
  const getFilesfromLocalStorage = async () => {
    await getVideoData()
      .then(async res => {
        console.log('RESPONSE', res);
        if (res === null || res.length == 0) {
          console.log('NO VIDEO DATA FOUND');
          setNoData(true);
        } else {
          setNoData(false);
        }
        setVideoData(res);
        console.log('VIDEO DATA', videoData);
      })
      .catch(function (error) {
        const [isModule, setModule] = useState(false);
        console.log('Network Error ' + error);
      });
  };
  const HandleBackPressed = () => {
    console.log('BACK', props.navigation);
    props.navigation.goBack();
    // props.navigation.navigate('Courses');
  };
  const deleteOfflineVideo = async (courseIndex,moduleIndex,videoIndex) => {
    console.log(courseIndex,moduleIndex,videoIndex);
    deleteVideo(courseIndex,moduleIndex,videoIndex);
    setMinus(!minus);
    // getFilesfromLocalStorage();
    // console.log('delete', props);

    // return (
    //   RNFS.unlink(props)
    //     .then(() => {
    //       console.log('FILE DELETED');
    //     })
    //     // `unlink` will throw an error, if the item to unlink does not exist
    //     .catch(err => {
    //       console.log(err.message);
    //     })
    // );
  };
  const openPlayer = (data) => {
    props.navigation.navigate('VideoPageScreen', {data});
  };
  const changeExpandState = i => {
    setCurrentCourseId(i);
    setExpandedCourse(!expandedCourse);
  };
  const changeModuleExpandState = i => {
    setCurrentModuleId(i);
    setExpandedModule(!expandedModule);
  };
  const call = () => {
    var phone = '03111444734';
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Courses');
          }}>
          <Image
            source={require('./../assets/np_red.png')}
            style={{height: 30, width: 120}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            call();
          }}>
          <Image source={require('./../assets/phone.png')} />
        </TouchableOpacity>
      </View>
      {!noData && (
        <ScrollView>
          {videoData.map((ele, courseIndex) => (
            <View key={'video-div-' + courseIndex}>
              <TouchableOpacity onPress={() => changeExpandState(courseIndex)}>
                <View style={styles.coursebar}>
                  <Text style={styles.coursebarText}>{ele.courseName}</Text>
                  {expandedCourse && courseIndex === currentCourseId && (
                    <View>
                      <Image
                        style={styles.coursebarIcon}
                        source={require('./../assets/up_arrow.png')}
                      />
                    </View>
                  )}
                  {!(expandedCourse && courseIndex == currentCourseId) && (
                    <View>
                      <Image
                        style={styles.coursebarIcon}
                        source={require('./../assets/down_arrow.png')}
                      />
                    </View>
                  )}
                </View>
                {expandedCourse && courseIndex == currentCourseId && (
                  <View>
                    {ele.modules.map((ele, moduleIndex) => (
                      <View key={'mod-div-' + moduleIndex}>
                        <TouchableOpacity
                          onPress={() => changeModuleExpandState(moduleIndex)}>
                          <View style={styles.modulebar}>
                            <Text style={styles.coursebarText}>
                              {ele.moduleName}
                            </Text>
                            {/* <TouchableOpacity
                        onPress={() => {
                          deleteVideo(ele.path);
                        }}>
                        <View>
                          <Image
                            source={require('./../assets/ant-design_delete-outlined.png')}
                          />
                   
                        </View>
                      </TouchableOpacity> */}
                            {expandedModule && moduleIndex === currentModuleId && (
                              <View>
                                <Image
                                  style={styles.coursebarIcon}
                                  source={require('./../assets/up_arrow.png')}
                                />
                              </View>
                            )}
                            {!(expandedModule && moduleIndex == currentModuleId) && (
                              <View>
                                <Image
                                  style={styles.coursebarIcon}
                                  source={require('./../assets/down_arrow.png')}
                                />
                              </View>
                            )}
                          </View>
                          {expandedModule && moduleIndex === currentModuleId && (
                            <View>
                              {ele.videos.map((ele, videoIndex) => (
                                <View key={'videos-div-' + videoIndex}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      openPlayer(ele);
                                    }}>
                                    <View style={styles.videoBox}>
                                      <View>
                                        <Image
                                          style={styles.videoIcon}
                                          source={require('./../assets/video.png')}
                                        />
                                      </View>
                                      <View style={styles.videoTitleBox}>
                                        <Text style={styles.videoTitle}>
                                          {ele.video_name}
                                        </Text>
                                        <Text style={styles.videoDuration}>
                                          {ele.duration}
                                        </Text>
                                      </View>
                                      <View>
                                        <TouchableOpacity
                                          onPress={() => {
                                            deleteOfflineVideo(courseIndex,moduleIndex,videoIndex);
                                          }}>
                                          <View>
                                            <Image
                                              source={require('./../assets/ant-design_delete-outlined.png')}
                                            />
                                            {/* <Text>Delete</Text> */}
                                          </View>
                                        </TouchableOpacity>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                </View>
                              ))}
                            </View>
                          )}
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
      {noData && (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>
            You currently have no downloaded videos.
          </Text>
          <Text style={styles.noDataText}>
            Tap on the download icon on the video page
          </Text>
          <Text style={styles.noDataText}>
            to have videos avaialble offline.
          </Text>
          <Image
            style={styles.noDataDownload}
            source={require('./../assets/no_data.png')}
          />
        </View>
      )}
      {deleteDiv && (
        <View style={styles.deleteBG}>
          <View style={styles.deleteHolder}>
            <View>
              <Text style={styles.deleteHead}>Delete Video?</Text>
            </View>
            <View style={styles.buttonDiv}>
              <Button
                onPress={() => console.log('BUTTON')}
                title="Cancel"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                onPress={() => console.log('BUTTON')}
                title="Delete"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};
export default VideoListing;

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  headerText: {
    fontSize: 24,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: '400',
    overflow: 'hidden',
    maxHeight: 35,
    // white-space: nowrap,
    // text-overflow: ellipsis;
  },
  videoTitleBox: {
    width: '60%',
  },
  videoDuration: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#838383',
    width: '40%',
    maxHeight: 16,
    overflow: 'hidden',
    fontSize: 14,
  },
  videoBox: {
    borderWidth: 1,
    // borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#EAEAEA',
    // backgroundColor:'green',
    height: 100,
  },
  videoIcon: {
    width: 30,
    height: 30,
  },
  noDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  noDataText: {
    fontSize: 16,
  },
  noDataDownload: {
    margin: 20,
  },
  coursebar: {
    backgroundColor: '#EDEFF8',
    height: 38,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  modulebar: {
    backgroundColor: '#F5F6FA',
    height: 38,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  coursebarText: {
    paddingLeft: 20,
    fontSize: 16,
  },
  coursebarIcon: {
    marginRight: 20,
  },
  deleteBG: {
    backgroundColor: 'rgba(8,8,8,0.66)',
    height: '100%',
  },
  deleteHolder: {
    backgroundColor: 'white',
    height: '20%',
    position: 'relative',
    top: '73%',
  },
  deleteHead: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonDiv: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
