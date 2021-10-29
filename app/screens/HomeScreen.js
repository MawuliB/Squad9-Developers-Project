import React from 'react';
import { SafeAreaView, View, Image, Dimensions, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';

import Carousel from '../component/Carousel'
import { dummyData } from '../images'

const { width, height } = Dimensions.get('window')

const DATA = [
  {
    id: '1',
    title: 'Services',
    next: 'Services'
  },
  {
    id: '2',
    title: 'Gallery',
    next: 'Gallery'
  },
  {
    id: '3',
    title: 'Contact Us',
    next: 'Contact'
  },
  {
    id: '4',
    title: 'About Us',
    next: 'About'
  },
  {
    id: '5',
    title: 'FAQ',
    next: 'FAQ'
  },
];


export default function LoginScreen({navigation}) {

    const Item = ({ title, next }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(next)} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
   
  );

    const renderItem = ({ item }) => (
    <Item title={item.title} next={item.next} />
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
        //pagingEnabled
        scrollEnabled
        //onPress={() => navigation.navigate({next})}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: Platform.OS === 'android' ? 20 : 0
  },
  item: {
    flex: 1,
        width: width - 20,
        height: height / 2.3,
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




/*import React from 'react'
import { Dimensions, Image, Pressable, SafeAreaView, Alert, TouchableOpacity, TextInput, ImageBackground, StyleSheet, Text, View, ScrollView, _ScrollView } from 'react-native'
//import { ScrollView } from 'react-native-web';

const {width} = Dimensions.get("window");
const height = width * 0.6;

const images = [
    "https://bbsbridal.org/wp-content/uploads/2021/08/IMG_3219_Facetune_08-08-2021-20-05-25-scaled.jpeg"
    ,"https://bbsbridal.org/wp-content/uploads/2021/09/IMG_2568-1080x728.jpg"
    ,"https://bbsbridal.org/wp-content/uploads/2021/09/bfa6c281-e87e-4c04-94d0-9449f1aaba8a-1577x1064.jpg"
    ,"https://bbsbridal.org/wp-content/uploads/2021/09/77DE7A26-D2DF-4CCB-8798-5A9174230A50.jpg"
]

export default class HomeScreen extends React.Component {
        state = {
            active: 0
        }

        change = ({nativeEvent}) => {
            const slide = Math.cell(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide !== this.state.active){
                this.setState({active: slide});
            }
        }

        render() {
            return (
                <View style ={styles.container}>
                    <ScrollView
                    paddingEnabled
                    horizontal
                    onScroll={this.change}
                    showHorizontalScrollInddicator={false}
                    style={styles.scroll}
                    >
                        {

                        images.map((image, index) => {
                            <Image
                                key={index}
                                source={{uri: image}}
                            />
                        })
                        
                        }
                    </ScrollView>
                    <View style={styles.pagination}>
                        {
                            images.map((i, k) => (
                                <Text key={k} style={k==this.state.active ? styles.pagination: styles.pagingActiveText}>*</Text>
            )) 
                        }
                    </View>

                </View>
            )
        }

        /*<SafeAreaView>
            <ImageBackground 
            style={styles.home}
            resizeMode='stretch'
            source={require("../assets/salon.jpg")}
            >
                <View style={styles.top}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.text}>BB's BRIDAL SALON</Text>
                    </TouchableOpacity>
                </View>
                    <View style={styles.top1}>
                        <TouchableOpacity style={styles.blog}>
                            <Text style={styles.text}>SERVICES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.blog} >
                            <Text style={styles.text} >CONTACT</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.top1}>
                        <TouchableOpacity style={styles.blog} >
                            <Text style={styles.text} >APPOINTMENTS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.blog} onPress={() => navigation.navigate("About")}>
                            <Text style={styles.text} >ABOUT US</Text>
                        </TouchableOpacity>
                    </View>

            </ImageBackground>
        </SafeAreaView> 
    
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        width,
        height
    },
    home: {
        top: 20,
        height: "100%",
        width: "100%",
    },
    scroll: {
        width: "30%",
        height: "30%"
    },
    image: {
        width: "30%",
        height: "30%",
        resizeMode: "cover"
    },
    pagination: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        alignSelf: "center"
    },
    pagingActiveText: {
        fontSize: (width/30),
        color: "#fff",
        margin: 3
    },
    pagingText: {
        fontSize: (width/30),
        color: "#888",
        margin: 3
    },
    top: {
        top: 10,
        left: 10,
    },
    top1: {
        flex: 1,
        justifyContent: "space-evenly",
        flexDirection: "row"
        
    },
    blog: {
        justifyContent: "space-evenly",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "grey",
        opacity: 0.5,
        height: 150,
        width: 130
    },
    text: {
        color: "red",
        fontWeight: "bold"
        
    }
})*/