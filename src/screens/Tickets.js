import React, { useState } from 'react';
import ticket_1 from '../assets/images/ticket_1.png'
import ticket_2 from '../assets/images/ticket_2.png'
import ticket_3 from '../assets/images/ticket_3.png'
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants'
import { McAvatar, McIcon, McText } from '../components'
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import { color } from 'react-native-reanimated';

const Tickets = ({ params }) => {
  // let logoFromFile = require('../assets/logo.png');

  const _renderItem = ({ item, index }) => {
    console.log('dummu tickets', dummyData.Tickets)
    return (
      <TouchableOpacity>
        <View
          style={{
            marginTop: index === 0 ? 10 : 8,
            marginBottom: index === dummyData.Tickets.length - 1 ? 10 : 0,
          }}>
          <ImageBackground
            source={
              item.type === 'TECH' ? ticket_1 : ticket_2
            }
            resizeMode='cover'
            style={{
              flexDirection: 'row',
              width: '100%',
              height: SIZES.height / 6 + 15,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
              width: '68%',
              height: '90%',
              // backgroundColor: COLORS.transparentBlack,
            }}>
              <McText h2 style={{
                marginLeft: 25,
                marginTop: 15,
              }}>{item.title}</McText>
              <View style={{
                width: '75%',
                height: 2,
                left: 20,
                backgroundColor: COLORS.gray,
              }} />
              <View
              style={{flexDirection: 'row'}}>

              <McText body6 style={{
                marginLeft: 25,
                opacity: 0.6,
              }}>{moment(item.startingTime).format('MMM').toUpperCase() + ' ' + moment(item.startingTime).format('DD').toUpperCase()}</McText>
              <McText body6 style={{
                marginLeft: 25,
              }}>{item.campous + '   ' + item.location}</McText>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginVertical: 10,
                alignItems: 'flex-end',
                // backgroundColor: COLORS.transparentBlack
              }}>
                <View style={{
                  width: '30%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <McText h4 >FROM</McText>
                  <McText h3 >10:30</McText>
                </View>
                <View
                  style={{
                    height: '80%',
                    width: 2,
                    backgroundColor: COLORS.gray1,
                }}
                />
                <View style={{
                  width: '30%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <McText h4 >ADULT</McText>
                  <McText h3 >5</McText>
                </View>
                <View
                  style={{
                    height: '80%',
                    width: 2,
                    backgroundColor: COLORS.gray1,
                  }}
                />
                <View style={{
                  width: '30%',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <McText h4 >TILL</McText>
                  <McText h3 >13:30</McText>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '32%',
                height: '90%',
                marginRight: 5,
                // backgroundColor: COLORS.transparentWhite,
                alignItems: 'center'
            }}>
              <View
                style={{
                  width: 85,
                  height: 85,
                  marginRight: 6,
                  marginTop: 6,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // backgroundColor: COLORS.transparentBlack,
                }}
              >
                <QRCode
                  size= {82}
                  value= {item.title + item.type}
                />
              </View>
              <McText h4 color={COLORS.black} style={{
                marginTop: 8,
                marginRight: 5,
              }} >{item.title}</McText>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <SectionHeader>
        <View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end'
          }} >
            <McText h2 style={{
              opacity: 0.7,
              marginRight: 5,
            }}>Registered</McText>
            <McText h1>EVENTS</McText>
          </View>
        </View>
        <McAvatar source={images.avatar} />
      </SectionHeader>
      {/* flat list */}
      <SectionTitle>
        <McText h5>EVENT TICKETS</McText>
      </SectionTitle>
      <ScrollView>
        <View>
          <FlatList
            data={dummyData.Tickets}
            renderItem={_renderItem}
          ></FlatList>
          <View style={{height: 100,}}/>
        </View>
      </ScrollView>
    </View>
  ); 
};

const SectionHeader = styled.View`
  padding: 10px ${SIZES.padding};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const SectionTitle = styled.View`
  margin: 20px ${SIZES.padding};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    padding: 5,
  },
});

export default Tickets;
