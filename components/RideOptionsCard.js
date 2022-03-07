import { Text, TouchableOpacity, View, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTimeTravelInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.5;
const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTimeTravelInformation);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute left-3 left-5 z-50 rounded-full`}
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl`}>
          Choose A Ride for- {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{ width: 80, height: 80, resizeMode: "contain" }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{title}</Text>
              <Text>Travel Time-{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-sm`}>
              ₹
              {(
                (travelTimeInformation?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                100
              ).toFixed()}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`py-3 m-2 border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`bg-black py-2 m-3 ${!selected && "bg-gray-300"} rounded-lg`}
          disabled={!selected}
        >
          <Text style={tw`text-center text-white text-xl `}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
