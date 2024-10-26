import { MessageType, showMessage } from "react-native-flash-message";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Options {
  title: string;
  description: string;
  type: MessageType;
  hideIcon?: boolean;
}

export const useToast = () => {
  const insets = useSafeAreaInsets();
  return {
    show: (options: Options) => {
      showMessage({
        message: options.title,
        description: options.description,
        type: options.type,
        autoHide: true,
        duration: 4000,
        statusBarHeight: insets.top,
        icon: options.hideIcon ? "none" : options.type,
        titleStyle: {
          fontSize: 18,
          fontFamily: "PoppinsBold",
          lineHeight: 26,
          marginTop: -3,
        },
        textStyle: { fontSize: 14, fontFamily: "Poppins" },
      });
    },
  };
};
