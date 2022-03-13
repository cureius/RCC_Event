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

const Tickets = ({ params }) => {

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            marginTop: index === 0 ? 10 : 20,
            marginBottom: index === dummyData.Events.length - 1 ? 10 : 0,
          }}>
          <ImageBackground
            source={ticket_2}
            resizeMode='cover'
            borderRadius={SIZES.radius}
            style={{ width: '100%', height: SIZES.height / 6 + 30 }}
          >
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
        <McText h5>TECH EVENTS</McText>
      </SectionTitle>
      <View>
        <FlatList
          contentContainerStyle={{
            padding: 5,
          }}
          keyExtractor={(item) => 'event_' + item.id}
          data={dummyData.Events}
          renderItem={_renderItem}
        ></FlatList>
      </View>
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
