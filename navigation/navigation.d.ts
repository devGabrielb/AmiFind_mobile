import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
    Main: undefined;
    DetailsPage: {    
        id: number;
        title: string;
        description: string;
        advertisingCategory: string;
        date: string;
        postDate: string;
        location: string;
        breed: string;
        sex: string;
        imageUrl: string;
};
};

type DetailsPageNavigationProp = NativeStackNavigationProp<RootStackParamList,'DetailsPage'>;