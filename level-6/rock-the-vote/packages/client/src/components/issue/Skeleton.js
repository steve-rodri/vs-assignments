import {
  HStack,
  VStack,
  Flex,
  Spacer,
  SkeletonText,
  Skeleton as CSkeleton,
} from "@chakra-ui/react";

export const Skeleton = () => {
  return (
    <VStack>
      <CSkeleton mb={1} h={4} w={100} alignSelf="start" />
      <CSkeleton h={8} w="full" />
      <SkeletonText mt="4" noOfLines={5} spacing="2" w="full" />
      <Flex w="full">
        <HStack spacing={4}>
          <CSkeleton h={8} w={75} />
          <CSkeleton h={8} w={75} />
        </HStack>
        <Spacer />
        <CSkeleton h={8} w={75} />
      </Flex>
    </VStack>
  );
};

export default Skeleton;
