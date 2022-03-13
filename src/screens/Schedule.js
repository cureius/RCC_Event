import React, { Component , useState} from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Agenda, DateData, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { dummyData, FONTS, SIZES, COLORS, icons, images } from '../constants'
import { McAvatar, McIcon, McText } from '../components'
import LinearGradient from 'react-native-linear-gradient';


const Schedule = ({ params }) => {

  const [items, setItems] = useState(
    {
      "2022-04-01": [
        {
          "day": "2022-04-01",
          "height": 106,
          "name": "TechTrix2022-04-01 #0"
        },
        {
          "day": "2022-04-01",
          "height": 126,
          "name": "TechTrix2022-04-01 #1"
        },
        {
          "day": "2022-04-01",
          "height": 87,
          "name": "TechTrix2022-04-01 #2"
        }
      ],
      "2022-04-02": [],
      "2022-04-03": [],
      "2022-04-04": [
        {
          "day": "2022-04-04",
          "height": 102,
          "name": "TechTrix2022-04-04 #0"
        }
      ],
      "2022-04-05": [],
      "2022-04-06": [
        {
          "day": "2022-04-06",
          "height": 89,
          "name": "TechTrix2022-04-06 #0"
        },
        {
          "day": "2022-04-06",
          "height": 50,
          "name": "TechTrix2022-04-06 #1"
        },
        {
          "day": "2022-04-06",
          "height": 50,
          "name": "TechTrix2022-04-06 #2"
        }
      ],
      "2022-04-07": [
        {
          "day": "2022-04-07",
          "height": 107,
          "name": "TechTrix2022-04-07 #0"
        }
      ],
      "2022-04-08": [
        {
          "day": "2022-04-08",
          "height": 69,
          "name": "TechTrix2022-04-08 #0"
        },
        {
          "day": "2022-04-08",
          "height": 93,
          "name": "TechTrix2022-04-08 #1"
        }
      ],
      "2022-04-09": [],
      "2022-04-10": [
        {
          "day": "2022-04-10",
          "height": 50,
          "name": "TechTrix2022-04-10 #0"
        },
        {
          "day": "2022-04-10",
          "height": 50,
          "name": "TechTrix2022-04-10 #1"
        }
      ],
      "2022-04-11": [],
      "2022-04-12": [
        {
          "day": "2022-04-12",
          "height": 91,
          "name": "TechTrix2022-04-12 #0"
        },
        {
          "day": "2022-04-12",
          "height": 50,
          "name": "TechTrix2022-04-12 #1"
        },
        {
          "day": "2022-04-12",
          "height": 92,
          "name": "TechTrix2022-04-12 #2"
        }
      ],
      "2022-04-13": [
        {
          "day": "2022-04-13",
          "height": 50,
          "name": "TechTrix2022-04-13 #0"
        }
      ],
      "2022-04-14": [],
      "2022-04-15": [],
      "2022-04-16": [],
      "2022-04-17": [
        {
          "day": "2022-04-17",
          "height": 78,
          "name": "TechTrix2022-04-17 #0"
        }
      ],
      "2022-04-18": [
        {
          "day": "2022-04-18",
          "height": 53,
          "name": "TechTrix2022-04-18 #0"
        },
        {
          "day": "2022-04-18",
          "height": 106,
          "name": "TechTrix2022-04-18 #1"
        }
      ],
      "2022-04-19": [
        {
          "day": "2022-04-19",
          "height": 50,
          "name": "TechTrix2022-04-19 #0"
        },
        {
          "day": "2022-04-19",
          "height": 100,
          "name": "TechTrix2022-04-19 #1"
        }
      ]
    }
  )

  const loadItems = (day) => {
    // const items = items || {};
    
      // for (let i = -15; i < 35; i++) {
      //   console.log("🚀 ~ file: Schedule.js ~ line 22 ~ loadItems ~ i", i)
      //   const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      //   console.log("🚀 ~ file: Schedule.js ~ line 23 ~ loadItems ~ time", time)
      //   const strTime = timeToString(time);
      //   console.log("🚀 ~ file: Schedule.js ~ line 25 ~ loadItems ~ strTime", strTime)
      //   console.log("🚀 ~ file: Schedule.js ~ line 29 ~ loadItems ~ items[strTime]", items[strTime])

      //   if (!items[strTime]) {
      //     items[strTime] = [];

      //     const numItems = Math.floor(Math.random() * 3 + 1);
      //     for (let j = 0; j < numItems; j++) {
      //       items[strTime].push({
      //         name: 'TechTrix' + strTime + ' #' + j,
      //         height: Math.max(50, Math.floor(Math.random() * 150)),
      //         day: strTime
      //       });
      //     }
      //   }
        
      // }

      // const newItems = {};
      // Object.keys(items).forEach(key => {
      //   newItems[key] = items[key];
      // });
      setItems(items);
      console.log("🚀 ~ file: Schedule.js ~ line 49 ~ loadItems ~ items", items)
  }

  const renderItem = (reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? COLORS.white : COLORS.white;

    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height, backgroundColor: COLORS.gray900 }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
        }}>

          <View
              style={
                {
                  width: 5,
                  height: '100%',
                  backgroundColor: isFirst ? COLORS.red : COLORS.blueA200,
                  borderRadius: 10,
                }
              }
            >

          </View>

          <View
            style={{
              flex: 1,
              // backgroundColor: COLORS.gray1,
              borderRadius: 10,
              marginLeft: 10,
          }}
          >
            {isFirst ?
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                <McText h4 >{reservation.name}</McText>
                <TouchableOpacity
                  onPress={() => Alert.alert('Set Reminder On: ' + reservation.day + '\n For Event: ' + reservation.name)}>
                  <LinearGradient
                    colors={[COLORS.blueA200, COLORS.blue]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                      borderRadius: 15,
                      padding: 8,
                      marginLeft: 5,
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
                      <McIcon source={icons.notification} size={20} ></McIcon>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              </View> : null}
          </View>

        </View>
        
      </TouchableOpacity>
    );
  }

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  }

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


  return (
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-04-01'}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2022-02-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2022-05-30'}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={1}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={1}
        // markingType={'period'}
        markedDates={{
          '2022-04-08': {textColor: '#43515c'},
          '2022-04-09': {textColor: '#43515c'},
          '2022-04-14': {startingDay: true, endingDay: true, color: COLORS.blueA200},
          '2022-05-21': {startingDay: true, color: COLORS.blueA200},
          '2022-05-22': {endingDay: true, color: COLORS.gray900},
          '2022-05-24': {startingDay: true, color: COLORS.gray900},
          '2022-05-25': {color: 'gray'},
          '2022-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{
          calendarBackground: COLORS.tabBar,
          backgroundColor: COLORS.black,
          agendaDayTextColor: COLORS.blueA200,
          agendaDayNumColor: COLORS.yellow,
          agendaTodayColor: COLORS.red,
          agendaKnobColor: COLORS.blueA200,
          foregroundColor: COLORS.red,
          separatorColor: COLORS.yellow,
        }}
        
        // renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        // hideExtraDays={false}
        // showOnlySelectedDayItems
      />
    );
}


const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    marginRight: 5,
    marginTop: 10
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});


export default Schedule;
