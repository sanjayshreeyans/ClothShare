import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Header } from "react-native-elements";
import { SearchBar } from "react-native-elements";
import * as React from "react";


import { RangeSlider } from "react-instantsearch-dom";
import {
  connectSearchBox,
  Configure,
  Menu,
  HierarchicalMenu,
} from "react-instantsearch-dom";
import { Panel, RefinementList, MenuSelect, ToggleRefinement, SortBy} from "react-instantsearch-dom";
// import { RefinementList } from "react-instantsearch-hooks-web";
// import { ToggleRefinement } from "react-instantsearch-dom";
// how to import  connectSearchBox from algolia react instant search?
// import {connectToggleRefinement} from "react-instantsearch-dom"    
import { CheckBox } from "react-native-elements";
import { getDownloadURL, getStorage } from "firebase/storage";
import { ref as refS } from "firebase/storage";   

import { Icon } from "react-native-elements";
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits} from "react-instantsearch-dom";

import { InfiniteHits } from "react-instantsearch-dom";

export default function FlatListScreen({navigation, route}) {
  const ALGOLIA_ID = "2RC54JEYQ4";
  const Search_ID = "213f763bef6a347d940a29db2e8e2f42";

  const searchClient = algoliasearch(ALGOLIA_ID, Search_ID)
  
   const [search , updateSearch] = React.useState();
  const [url, setUrl] = React.useState();

  React.useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = refS(storage, "/image_sample.png");
      await getDownloadURL(reference).then((x) => {
        setUrl(x);
      });
    };
    func();
  }, []);

  

  //  React.useLayoutEffect(() => {
   
  // }, [navigation]);
  const animals = [
    {
      id: 1,
      name: "Shark",
      image: url,
    },
    {
      id: 2,
      name: "Herring",
      image: url,
    },
    {
      id: 3,
      name: "Lion",
      image: url,
    },
    {
      id: 4,
      name: "Polar Bear",
      image: url,
    },
    {
      id: 5,
      name: "Penguin",
      image: url,
    },
    {
      id: 6,
      name: "Parrot",
      image: url,
    },
    {
      id: 7,
      name: "Parrot",
      image: url,
    },
    {
      id: 8,
      name: "Parrot",
      image: url,
    },
    {
      id: 9,
      name: "Parrot",
      image: url,
    },
  ];

  const oneAnimal = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.avatarContainer}>
        <Image source={{uri: item.image}} style={styles.avatar} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const headerComponent = () => {
    return <Text style={styles.listHeadline}>Animals</Text>;
  };

  const listSeparator = () => {
    return <View style={styles.separator} />;
  };

const SearchBox = ({ currentRefinement, refine }) => {
  const[search, updateSearch] = React.useState();
    return (
            <Header
        // containerStyle={styles.HeaderStyle}
        elevated={true}
        // containerStyle={styles.container}
        leftComponent={
          <View style={styles.HeaderStyle}>
            {/* <Icon
              raised
              name="arrow-back"
              type="material"
              color="#f50"
              onPress={() => navigation.navigate("HomeScreen")}
            /> */}




            <Text style={styles.paragraph}>ClothShare</Text>

            <TouchableOpacity
                paddingTop={hp("2%")}
                title="Sell"
                color="purple"
                onPress={() => navigation.navigate("adScreen")}
                style={styles.roundButton2}
            >
              <Text style={styles.roundButton13}>Sell or Rent</Text>
            </TouchableOpacity>


          </View>
        }
        centerComponent={
         <SearchBar
        round={true}
        clearIcon={true}
        lightTheme={true}
        placeholderTextColor={"black"}
        containerStyle={styles.containerSearch}
        inputContainerStyle={styles.containerSearch2}
        inputStyle={{ color: "black" }}
        placeholder="Type Here..."
        value={currentRefinement}
        onChange={event => refine(event.currentTarget.value)}>

        </SearchBar>
        }
        
        rightComponent={{ icon: "home", color: "#fff" }}
      />
      
    );
  };
  const [check1, setCheck1] = React.useState(false);
// const ToggleRefinement = ({
//   currentRefinement,
//   label,
//   count,
//   refine,
//   createURL,
// }) => {
//   return (
//     <CheckBox
//       center
//       title="Miyapur"
//       checked={check1}
//       onPress={(event) => {
//         event.preventDefault();
//         refine(!currentRefinement);
//       }}
//     />
//   );

//   // return the DOM output
// };

  const Hit = ({ hit }) => {
    return (
      <View>
        

        
        <View style={styles.item}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: hit.image }} style={styles.avatar} />
          </View>

          <View style={styles.item2}>
            <Text style={styles.name}>{hit.Title}</Text>
            <View style={{ height: 10 }}></View>
            <Text style={styles.name}>{"$" + hit.Price}</Text>
            <View style={{ height: 30 }}></View>
            <Text style={styles.name}>{hit.Location}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </View>
    );
    
  }


const CustomSearchBox = connectSearchBox(SearchBox);
// const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement);
// index
//   .setSettings({
//     searchableAttributes: [
//       "Title",
//       "Location",
      
//     ],
//   })
//   .then(() => {
//     // done
//   });
  return (
    <View style={styles.container}>
      <View style={styles.containerInsta}>
        <InstantSearch indexName="SearchCloth" searchClient={searchClient}>
          {/* <SearchBox
            style={styles.containerInsta2}
            max-width={100}
            translations={{
              submitTitle: "Submit your search query.",
              resetTitle: "Clear your search query.",
              placeholder: "Start Searching Now...",
            }}
          ></SearchBox> */}
          {/* <RefinementList attribute="Location" style={styles.containerInsta} /> */}

          <CustomSearchBox></CustomSearchBox>
          {/* <Configure
            facetFilters={["Location:Miyapur", "Fashion"]}
            analytics={false}
          ></Configure> */}

          {/* <MenuSelect
            attribute="Location"
            defaultRefinement={"Miyapur"}
          /> */}

          {/* <Configure
            
            facetFilters={["Location:Tampa, FL"]}
            analytics={false}></Configure> */}

          <InfiniteHits hitComponent={Hit} style={styles.containerInsta} />
          <View style={styles.item2}>
            <Text>Locations</Text>
            <HierarchicalMenu attributes={["Location"]} />
          </View>
        </InstantSearch>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: "center", //Centered vertically
    // alignItems: "center", // Centered horizontally
  },
  containerInsta: {
    flex: 1,
    // alignItems: "left",
    // justifyContent: "top",
    width: "100%",
    height: "100%",
    // justifyContent: "center", //Centered vertically
    // alignItems: "center", // Centered horizontally
  },
  containerFilter: {
    // alignItems: "left",
    alignItems: "flex-end",
    // justifyContent: "top",

    width: "20%",
    height: "100%",
    // justifyContent: "center", //Centered vertically
    // alignItems: "center", // Centered horizontally
  },
  containerInsta2: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "top",
    width: "100%",
    height: "100%",
    // justifyContent: "center", //Centered vertically
    // alignItems: "center", // Centered horizontally
  },

  listHeader: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#7B52AB",
  },

  listHeadline: {
    color: "#333333",
    fontWeight: "bold",
    fontSize: 21,
  },

  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },

  item2: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "left",
    paddingVertical: 13,
  },

  avatarContainer: {
    borderRadius: 100,
    height: 230,
    width: 89,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
  },

  avatar: {
    height: 200,
    width: 200,
  },

  name: {
    fontWeight: "600",
    fontSize: 30,
    marginLeft: 100,
  },

  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CCC",
  },
  containerSearch: {
    // height: "10%",
    color: "white",
    width: "80%",
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderTopWidth: 0, //works
    borderBottomWidth: 0, //works
  },
  containerSearch2: {
    textColor: "black",
    color: "black",
  },
  HeaderStyle: {
    width: "110%",
    height: "8%",
    flexDirection: "row",
  },
  paragraph: {
    margin: 24,
    // fontSize: "1.5rem"
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  paragraph2: {
    margin: 24,
    // fontSize: "1.5rem"
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },

  roundButton2: {
    width: wp("6%"),
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "bottom", // align
    marginTop: hp("2%"),
    borderRadius: 25,
    backgroundColor: "rgb(90,210,138)",
  },
});
