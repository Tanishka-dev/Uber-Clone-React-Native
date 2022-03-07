import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const array = [
  {
    id: 1,
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },

  //Uber Eats can be implemented here
];
const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={array}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pb-8 pl-6 pt-4 bg-gray-200 m-3 w-60`}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 200, height: 200, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-1 text-lg font-bold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 `}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
