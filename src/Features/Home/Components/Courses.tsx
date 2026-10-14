import { FlatList, StyleSheet, Text } from "react-native";
import CourseCard from "./CourseCard";

const coursesList = [
  {
    id: 1,
    title: "Course 1",
    desc: "Course description.",
  },
  {
    id: 2,
    title: "Course 2",
    desc: "Course description.",
  },
  {
    id: 3,
    title: "Course 3",
    desc: "Course description.",
  },
];

export default function Courses() {
  return (
    <FlatList
      data={coursesList}
      keyExtractor={(course) => course.id.toString()}
      renderItem={({ item }) => (
        <CourseCard title={item.title} desc={item.desc} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>My Courses</Text>}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 30,
  },

  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },
});