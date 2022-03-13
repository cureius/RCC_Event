import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants'
import { McAvatar, McIcon, McText } from '../components'
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import GIF from '../assets/images/AbandonedGrimKagu-size_restricted.gif'

const Featured = ({ navigation }) => {

  const image = { uri: "https://thumbs.gfycat.com/AbandonedGrimKagu-size_restricted.gif" };
  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('EventDetail', {selectedEvent: item})
      }}>
        <View
          style={{
            marginLeft: index === 0 ? 30 : 20,
            marginRight: index === dummyData.Events.length - 1 ? 30 : 0,
          }}>
          <ImageBackground
            source={item.image}
            resizeMode='cover'
            borderRadius={SIZES.radius}
            style={{
              width: SIZES.width / 2 + 70,
              height: SIZES.width / 2 + 70,
              justifyContent: 'space-between'
            }}
            >
            <View style={{
              alignItems: 'flex-end',
              marginHorizontal: 15,
              marginVertical: 15,
            }} >
            <DateBox>
                <McText body5 color={COLORS.black} style={{
                  opacity: 0.5,
                  letterSpacing: 2,
                }}
                >
                  {moment(item.startingTime).format('MMM').toUpperCase()}
                </McText>
                <McText h2 color={COLORS.black}>
                  {moment(item.startingTime).format('DD').toUpperCase()}
                </McText>
            </DateBox>
            </View>
            <View style={{
              marginBottom: 25,
              marginLeft: 20,
            }}>
              <McText body5 style={{
                opacity:0.5,
              }} >{item.type}</McText>
              <McText h2 >{item.title}</McText>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container} >
        {/* <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}> */}
      {/* Header Section */}
      <SectionHeader>
        <View>
          <McText body5 style={{ opacity: 0.5}}>April 20, 9:20 pm</McText>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }} >
            <McText h2 style={{
              opacity: 0.7,
              marginRight: 5,
            }}>Explore</McText>
            <McText h1>TECHTRIX</McText>
          </View>
        </View>
        <McAvatar source={images.avatar} />
      </SectionHeader>
      {/* Search Section */}
      <SectionSearch>
        <SearchView>
          <McIcon source={ icons.search } size={ 24 }/>
          <TextInput
            placeholder='Search'
            placeholderTextColor={COLORS.gray1}
            style={{
              color: COLORS.white,
              width: 235
            }}
          >
          </TextInput>
          <McIcon source={ icons.filter } size={ 24 } />
        </SearchView>
      </SectionSearch>
      <ScrollView>
      {/* Featured Setion */}
      <SectionTitle>
        <McText h5>TECH EVENTS</McText>
      </SectionTitle>
        <View>
          <FlatList
            horizontal
            contentContainerStyle={{}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => 'event_' + item.id}
            data={dummyData.Events}
            renderItem = {_renderItem}
          ></FlatList>
        </View>
        <SectionTitle>
          <McText h5>NON-TECH EVENTS</McText>
        </SectionTitle>
        <View>
          <FlatList
            horizontal
            contentContainerStyle={{}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => 'event_' + item.id}
            data={dummyData.Events}
            renderItem={_renderItem}
          ></FlatList>
        </View>
      {/* For You */}
      <SectionTitle>
        <McText h5 >FOR YOU</McText>
      </SectionTitle>
      <LinearGradient
        colors={COLORS.linear}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          height: 100,
          marginHorizontal: 30,
          borderRadius: SIZES.radius,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <View style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }} >
          <GiftBox>
            <McIcon source={icons.gift} style={{
              height: 30,
              width: 30,
            }}></McIcon>
          </GiftBox>
          <View style={{ marginLeft: 20 }} >
            <McText h3 >Claim 1 Free T-Shirt</McText>
            <McText body4 style={{width: 220}} >Shear a EVENT with your 5 friends and earn a free T-Shirt.</McText>
          </View>
        </View>
        
        </LinearGradient>
        <LinearGradient
          colors={['red', 'blue']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            marginVertical:30,
            height: 100,
            marginHorizontal: 30,
            borderRadius: SIZES.radius,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }} >
            <GiftBox>
              <McIcon source={icons.gift} style={{
                height: 30,
                width: 30,
              }}></McIcon>
            </GiftBox>
            <View style={{ marginLeft: 20 }} >
              <McText h3 >Claim 1 Free Cretificate</McText>
              <McText body4 style={{ width: 220 }} >Be A well performing Volenteer and get a chance to earn a free CERTIFICATE.</McText>
            </View>
          </View>

        </LinearGradient>
        <View style={{paddingBottom: 180}}></View>
      </ScrollView>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const SectionHeader = styled.View`
  padding: 16px ${SIZES.padding};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SectionSearch = styled.View`
  margin: 10px ${SIZES.padding};
  height: 50px;
  background-color: ${COLORS.input};
  border-radius: 15px;
  justify-content: center
`;

const SearchView = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-left: 9px;
  margin-right: 15px;
`;

const SectionTitle = styled.View`
  margin: 20px ${SIZES.padding};
`;

const DateBox = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  align-items: center;
  justify-content: center;
`;

const GiftBox = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${COLORS.white};
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Featured;
