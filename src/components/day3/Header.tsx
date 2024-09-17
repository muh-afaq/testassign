import { Button, Checkbox, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { LiaSaveSolid } from "react-icons/lia";
import { MdHistory } from "react-icons/md";

const Header = () => {
  return (
    <Flex align="center" justify="between" className="p-4">
      {/* Left side Flex with Checkboxes */}
      <Flex gap="3" align={'center'}>
        <Text size={'5'} weight={'bold'}>MOCA</Text>
        <Checkbox color="cyan" defaultChecked />
        <Text>Add to Note</Text>
      </Flex>

      {/* Right side Flex with Checkboxes */}
      <Flex gap="3" align="center" className="text-sm">
        <Button variant="outline" color='gray' className=" border border-l border-black">
          <MdHistory />
          <Text>History</Text>
        </Button>
        <Button>
          <LiaSaveSolid />
          <Text>Save</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
