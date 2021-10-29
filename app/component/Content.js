import React from 'react';
import { SafeAreaView, View, Dimensions, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import Carousel from '../component/Carousel'
import { dummyData } from '../images'

const { width, height } = Dimensions.get('window')

const DATA = [
  {
    id: '1',
    title: 'Services',
  },
  {
    id: '2',
    title: 'Gallery',
  },
  {
    id: '3',
    title: 'Contact Us',
  },
  {
    id: '4',
    title: 'Reviews',
  },
  {
    id: '5',
    title: 'FAQ',
  },
];

const Item = ({ title }) => (
      <TouchableOpacity style={styles.item}>
          <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
 
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
        <Image 
            style={{height: 30, width: 30}}
            source={{uri: "https://bbsbridal.org/wp-content/uploads/2021/08/cropped-logoweb2.jpg"}}
            />
        <Carousel data = {dummyData}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        scrollEnabled
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    top: Platform.OS === 'android' ? 20 : 0
  },
  item: {
    flex: 1,
        width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        justifyContent: "center",
  },
  title: {
    fontSize: 32,
    alignSelf: "center"
  },
});

export default App;