import React from 'react';
import CourseComponent from '../components/CourseComponent';
import { Box, Grid, Heading, Text } from '@radix-ui/themes';
import next from 'next';

const fetchCourseData = async () => {
  const response = await fetch('https://course-json-server-data.onrender.com/courses', { next: { revalidate: 5 } });
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  const data = await response.json();
  return data;
};
const Cartpage = async () => {
  const data = await fetchCourseData();

  return (
    <Box as="div">
      <Heading as="h1">This is the Cart Page</Heading>
      <Grid columns="repeat(3,1fr)" gap="2" >
        {data ? (
          data.map((ele) => (
            <CourseComponent key={ele.id} ele={ele} />
          ))
        ) : (
          // <p>Loading...</p>
          <Text as="p">Loading....</Text>
        )}
      </Grid>
    </Box>
  );
};

export default Cartpage;
