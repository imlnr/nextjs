import { Box, Button, Heading, Text } from '@radix-ui/themes';
import React from 'react';

const CourseComponent = ({ ele }) => {
    return (
        <Box as="div" style={{ border: "1px solid", width: "content-width", margin: "0.5% 1%" }}>
            <Heading as="h4">Title: {ele.courseTitle}</Heading>
            <Text as="p">Price: {ele.coursePrice}</Text>
            <Text as="p">Description: {ele.description}</Text>
            <Button>Buy now</Button>
        </Box>
    );
};

export default CourseComponent;
