import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface Props {
  label: string;
  isSponsored?: boolean;
}

export default function Tag({ label, isSponsored = false }: Props) {
  const bgColor = isSponsored ? "#EB874033" : "#A6A6A633";
  const textColor = isSponsored ? "#F5640A" : "#3C3C4399";
  const borderColor = isSponsored ? "#F5640A1A" : "#A6A6A633";
  return (
    <ThemedView
      key={label}
      className={`px-2 py-1 mr-2 rounded border`}
      style={{ backgroundColor: bgColor, borderColor }}
    >
      <ThemedText className={`text-xs`} style={{ color: textColor }}>
        {label}
      </ThemedText>
    </ThemedView>
  );
}
