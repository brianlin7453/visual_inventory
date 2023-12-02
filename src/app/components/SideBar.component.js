"use client";
import { Box, Flex, Icon, useColorModeValue, Text } from "@chakra-ui/react";
const LinkItems = [
  { name: "CRUD Operations", route: "/" },
  { name: "Barcode Search", route: "/search" },
];
function SideBar() {
  return <SidebarContent display={{ base: "none", md: "block" }} />;
}

const SidebarContent = ({ ...rest }) => {
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="Sans-serif" fontWeight="bold">
          Friendly Spirits
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
const NavItem = ({ route, children, ...rest }) => {
  return (
    <Box
      as="a"
      href={route}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "orange.300",
          color: "white",
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  );
};
export default SideBar;
