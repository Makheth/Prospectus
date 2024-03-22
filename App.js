import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import Program from './Post';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.headerText}>LIMKOKWING UNIVERSITY</Text>
        <Text style={{color:'white'}}>OF CREATIVE TECHNOLOGY</Text>
        <Text style={styles.headerText}>Prospectus</Text>
        
      </View>

      <ScrollView >
      <View style={styles.ProgramContainer}>
        <Image source={require("./hospitality and Tourism.png")} style={styles.profilePicture} />
        <Program title="Hospital And Tourism" description="Event-planning,Cultural Competence & Sustainability " />
      </View>

      <View style={styles.ProgramContainer}>
      <Image source={require("./IT.png")} style={styles.profilePicture} />
      <Program title="Information Technology" description="solid foundation for various careers in technology." />
      </View>

      <View style={styles.ProgramContainer}>
      <Image source={require("./broadcasting.png")} style={styles.profilePicture} />
      <Program title=" Broadcasting and Journalism" description="Be the best at writing,reporting and storyTelling." />
      </View>
      
      <View style={styles.ProgramContainer}>
      <Image source={require("./business management.png")} style={styles.profilePicture} />
      <Program title="Business Management" description="Comprehensive understanding of various aspects of managing organization" />
      </View>

       <View style={styles.ProgramContainer}>
      <Image source={require("./Fashion.png")} style={styles.profilePicture} />
      <Program title="Fashion Design" description="Creativity with technical expertise and business acumen" />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'whitesmoke',
    padding: 10,
  },
  header: {
    backgroundColor: 'black', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight:50,
    paddingLeft:50,
    marginBottom: 40,
    marginTop: 20,
    borderWidth: 1,
  },
  headerText: {
    color: 'white', 
    fontSize: 20,
    fontWeight: 'bold',
    alignItems:'center'
  },
  ProgramContainer: {
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 16,
    flexDirection: 'row',
    padding: 15,
  },
  profilePicture: {
    width: 110,
    height: 110,
    borderRadius: 0,
    marginRight: 10,
  },
});
