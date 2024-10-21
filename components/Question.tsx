import { Text, View } from "react-native";

interface QuestionProps {
  question: string;
  answers: string[];
  selectedAnswer?: string;
}

export default function Question({
  question,
  answers,
  selectedAnswer,
}: QuestionProps) {
  return (
    <View
      className="w-[300] border mr-4 rounded-lg p-3"
      style={{ borderColor: "#00000033", borderWidth: 1 }}
    >
      <View className="flex flex-row">
        <View className="flex-1 pr-3">
          <Text>{question}</Text>
        </View>
        <Text className="text-[#F5640A]">Clear</Text>
      </View>
      <View className="flex flex-row mt-10 ">
        {answers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            isSelected={selectedAnswer === answer}
          />
        ))}
      </View>
    </View>
  );
}

interface AnswerProps {
  answer: string;
  isSelected: boolean;
}

function Answer({ answer, isSelected }: AnswerProps) {
  const classes = isSelected
    ? "bg-orange-100 border-orange-200"
    : "bg-gray-50 border-gray-200";
  const color = isSelected ? "orange" : "gray";
  return (
    <View
      className={`${classes} flex justify-center items-center min-w-[30] px-4 rounded-xl py-1 mr-2`}
    >
      <Text className={`text-xs text-${color}-600`}>{answer}</Text>
    </View>
  );
}
