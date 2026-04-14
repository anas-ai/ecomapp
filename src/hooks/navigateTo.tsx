import { useNavigation } from '@react-navigation/native';

export const useAppNavigation = () => {
  const navigation = useNavigation<any>();

  const navigateTo = (screen: string) => {
    navigation.navigate(screen);
  };
  return { navigateTo };
};
