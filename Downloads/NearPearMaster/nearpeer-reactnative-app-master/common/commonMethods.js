import React, {useRef, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const axios = require('react-native-axios');

export const storeVideoData = async data => {
  // AsyncStorage.clear();
  try {
    console.log('In storing video', data);
    getVideoData().then(res => {
      if (res != null) {
        console.log('NOT NULL', res);
        const courses = [...res];
        const courseIndex = courses.findIndex(
          course => course.courseId === data.course_id,
        );
        let moduleIndex;
        let videoIndex;
        if (courseIndex !== -1) {
          moduleIndex = courses[courseIndex].modules.findIndex(
            module => module.moduleId === data.module_id,
          );
          if (moduleIndex !== -1) {
            videoIndex = courses[courseIndex].modules[
              moduleIndex
            ].videos.findIndex(video => video.video_id === data.video_id);
            if (videoIndex !== -1) {
              console.log('video already exist');
            } else {
              courses[courseIndex].modules[moduleIndex].videos.push(data);
              AsyncStorage.setItem('videoOffline', JSON.stringify(courses));
            }
          } else {
            courses[courseIndex].modules.push({
              moduleName: data.module_name,
              moduleId: data.module_id,
              videos: [data],
            });
            AsyncStorage.setItem('videoOffline', JSON.stringify(courses));
          }
        } else {
          courses.push({
            courseName: data.course_name,
            courseId: data.course_id,
            modules: [
              {
                moduleName: data.module_name,
                moduleId: data.module_id,
                videos: [data],
              },
            ],
          });
          AsyncStorage.setItem('videoOffline', JSON.stringify(courses));
        }
      } else {
        console.log('NULL', res);
        var course = {
          courseName: data.course_name,
          courseId: data.course_id,
          modules: [
            {
              moduleName: data.module_name,
              moduleId: data.module_id,
              videos: [data],
            },
          ],
        };
        console.log(course, 'COURSE ARRAY');
        var courseArray = [course];
        console.log(courseArray,"COURSES ARRAY");
        AsyncStorage.setItem('videoOffline', JSON.stringify(courseArray));
      }
    });
  } catch (e) {
    console.log('Error', e);
  }
};

export const getVideoData = async () => {
  try {
    const data = await AsyncStorage.getItem('videoOffline');
    console.log(data,"IN GET VIDS");
    return data != null ? JSON.parse(data) : null;
  } catch (e) {
    // error reading value
    console.log('Error', e);
  }
};

export const setDownloadedID = async (id) => {
  try {
    console.log('In SAVE ID', id);
    getDownloadedID().then(res => {
      console.log('In SAVE RES', res);
      if (res != null) {
        var videos = [...res];
        videos.push(id);
 AsyncStorage.setItem('downloadedVideos', JSON.stringify(videos));

      }else{
        var videos = [id];
        var downloadedVideos = [videos];
  AsyncStorage.setItem('downloadedVideos', JSON.stringify(downloadedVideos));
      }
    })

  } catch (e) {
    // saving error
    console.log("ERROR SAVING ID");
  }
};
export const getDownloadedID = async () => {
  try {
    const data = await AsyncStorage.getItem('downloadedVideos');
    return data != null ? JSON.parse(data) : null;
  } catch (e) {
    // error reading value
    console.log('Error', e);
  }

};

export const setUser = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userLoggedIn', jsonValue);
  } catch (e) {
    // saving error
  }
};
export const getUser = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userLoggedIn');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
export const setUID = async (value) => {
  console.log("COMMON ID",value);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('uid', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
export const getUID = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('uid');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
export const setUserToken = async (value) => {
  console.log("COMMON TOKEN",value);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('userToken', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
export const getUserToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('userToken');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);elete
  }
};

export const deleteVideo = async (courseIndex,moduleIndex,videoIndex) => {
try {
  getVideoData().then(res => {
    if (res != null) {
      const courses = [...res];
      console.log(courses[courseIndex].modules[moduleIndex].videos.splice(videoIndex,1));
      courses[courseIndex].modules[moduleIndex].videos.splice(videoIndex,1);
      if(courses[courseIndex].modules[moduleIndex].videos.length == 0){
        console.log(courses[courseIndex].modules.splice(moduleIndex,1));
        courses[courseIndex].modules.splice(moduleIndex,1)
        if(courses[courseIndex].modules.length == 0){
          courses.splice(courseIndex,1);
        }
      }
      AsyncStorage.setItem('videoOffline', JSON.stringify(courses));
    }
  })
} catch (e) {
  console.log('Error', e);
}
};


export const mainBackend = axios.create({
  baseURL: 'https://test.nearpeer.org/api/v1/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const getVideoInfo = async (data) => {
  console.log('CHECK DATA API', data);
var uid = await getUID();
var token = await getUserToken();
  return axios.get('https://test.nearpeer.org/api/v1/getVssLink?vid=' + data, {
    headers: {
      Authorization:token,
      uid: uid,
      Referer: 'https://lms.nearpeer.org/',
    },
  });
};
