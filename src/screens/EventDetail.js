/**
 * React Native Event Booking App UI - Event Detail Screnn
 * -> The screen can be seperated 4 sections and 1 fixed bottom bar
 * 
 * TODO:
 * [] Build the header image background section
 *    [] Rendering the image background sub section (ImageBackground)
 *    [] Rendering the header sub section
 *    [] Rendering the footer sub section (LinearGradient)
 * [] Build the buttons group section
 * [] Build the description section
 * [] Build the location section (google map in dark mode)
 * [] Build the fixed bottom bar
 */
import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, ScrollView, ImageBackground, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants'
import { McAvatar, McIcon, McText } from '../components'
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const EventDetail = ({ navigation, route }) => {

  const [_selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
      let { selectedEvent } = route.params;
      setSelectedEvent(selectedEvent); 
  }, [])
  return (
    <View style={styles.container}>
      {console.log(_selectedEvent)}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: COLORS.black
        }}
        style={{
        backgroundColor: COLORS.black
        }}>
        {/* Image Background */}
        <ImageBackground
          resizeMode='cover'
          source={_selectedEvent?.image}
          style={{
            width: '100%',
            height: SIZES.height < 700 ? SIZES.height * 0.4 : SIZES.height * 0.5,
          }}>
          <View style={{ flex: 1}}>
          {/* Image Header */}
            <SectionImageHeader>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  width: 50,
                  height: 40,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
              }}>
                <McIcon source={icons.back_arrow} size={24}/>
              </TouchableOpacity>
              <View
                style={{
                  width: 90,
                  flexDirection: 'row',
                  height: 40,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  borderRadius: 12,
                }}>
                <TouchableOpacity>
                  <McIcon source={icons.like} size={24} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <McIcon source={icons.share} size={24} />
                </TouchableOpacity>
              </View>
            </SectionImageHeader>
            {/* Image Footer */}
            <SectionImageFooter>
              <LinearGradient
                colors={['transparent', COLORS.black]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{
                  width: '100%',
                  height: 330,
                  justifyContent: 'flex-end',
                }}
              >
                <FooterContentView>
                  <View>
                    <McText
                      body4
                      style={{
                        opacity: 0.5,
                        letterSpacing: 2
                      }}
                    >
                      {_selectedEvent?.type}</McText>
                    <McText h1 >{_selectedEvent?.title}</McText>
                    <McText
                      body4
                      style={{
                        opacity: 0.5,
                        letterSpacing: 1.5
                      }}
                    >
                      STARTING {moment(_selectedEvent?.startingTime).format('hh:mm A')}
                    </McText>
                  </View>
                  <LinearGradient
                    colors={COLORS.linear}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <McText body4 style={{ letterSpacing: 1}} >
                      {moment(_selectedEvent?.startingTime).format('MMM').toUpperCase()}
                    </McText>
                    <McText h2 style={{ letterSpacing: 1 }} >
                      {moment(_selectedEvent?.startingTime).format('DD').toUpperCase()}
                    </McText>
                  </LinearGradient>
                </FooterContentView>
              </LinearGradient>
            </SectionImageFooter>
          </View>
        </ImageBackground>
        {/* Buttons Here */}
        <ButtonsSection>
          <TouchableOpacity
            style={{
              width: 76,
              height: 32,
              marginRight: 16,
              backgroundColor: COLORS.white,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
          }}
          >
            <McText
              h6
              style={{
                color: COLORS.black,
                letterSpacing: 1,
            }}
            >ABOUT</McText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 120,
              height: 32,
              backgroundColor: COLORS.input,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <McText
              h6
              style={{
                opacity: 0.5,
                letterSpacing: 1,
              }}
            >PARTICIPANTS</McText>
          </TouchableOpacity>
        </ButtonsSection>
        {/* Description Section */}
        <DescriptionSection>
          <McText body3 >{_selectedEvent?.description}</McText>
        </DescriptionSection>
        {/* Location Section */}
        <LocationSection>
          <McText h3 >LOCATION</McText>
          <View
            style={{
              height: 200,
              overflow: 'hidden',
              marginTop: 30,
              borderRadius: 20
          }}
          >
            <MapView
              style={{
                height: 200,
                overflow: 'hidden',
              }}
              minZoomLevel={15}
              initialRegion={dummyData.Region}
              customMapStyle={dummyData.MapStyle}/>
          </View>
          <View style={{ paddingBottom: 150 }}></View>
        </LocationSection>
      </ScrollView>
      {/* Fixed Bottom Bar */}
      <BottomBarSection>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 30,
            marginVertical: 30
        }}
        >
          <View>
            <McText body3 style={{
              opacity: 0.5,
              letterSpacing: 1,
            }}>PRICE</McText>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'flex-end'
            }}>
              <McText h3 >Rs100</McText>
              <McText h4 >/Person</McText>
            </View>
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={COLORS.linear}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: 160,
                height: 50,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
              >
                <McText h4>BUY A TICKET</McText>
                <McIcon source={icons.buy_ticket} size={24} style={{ marginLeft: 10}}></McIcon>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </BottomBarSection>
    </View>
  );
};

const SectionImageHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${Platform.OS === 'ios' ? '40px' : '15px'};
  margin-left: 15px;
  margin-right: 20px;
`;

const SectionImageFooter = styled.View`
  flex: 1;
  justify-content: flex-end;
  position: relative;
`;

const FooterContentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
  margin: 0px 10px ; 
`;

const ButtonsSection = styled.View`
  margin: 15px 30px;
  flex-direction: row;
`;

const DescriptionSection = styled.View`
  margin: 0px 20px;
`;

const LocationSection = styled.View`
  margin: 15px 20px;
  border-redius: 30px;
`;

const BottomBarSection = styled.View`
  opacity: 0.8;
  height: 100px;
  width: ${SIZES.width + 'px'};
  border-radius: 20px;
  background-color: ${COLORS.tabBar};
  position: absolute;
  bottom: 0px;
  justtify-content: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default EventDetail;
