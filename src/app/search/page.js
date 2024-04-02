"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Input,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import SideBar from "../components/SideBar.component";
import environment from "../../../environment";

function FormComponent() {
  const [barcode, setBarcode] = useState("");
  const [itemList, setItemList] = useState([]);
  function getBarcodeItem(event) {
    event.preventDefault();
    axios.get(environment.API_URL + `/item?barcode=${barcode}`).then((res) => {
      const message = res.data.message;
      if (message === "No entry found.") {
        const noObjectFound = {
          manufacturer: "No Item Found",
          type: "No Item Found",
          volume: "No Item Found",
          location: "No Item Found",
          description: "No Item Found",
          price: "No Item Found",
        };
        setItemList([...itemList, noObjectFound]);
      } else {
        setItemList([...itemList, res.data.data]);
      }
      setBarcode("");
    });
  }
  return (
    <div className="flex bg-pink-100 min-h-screen h-1/4 w-full">
      <SideBar />
      <div className="pl-16 pt-16 pr-16 w-full">
        <form onSubmit={getBarcodeItem}>
          <Input
            autoFocus
            value={barcode}
            onChange={(event) => setBarcode(event.target.value)}
            className="w-2/3 border-black"
          ></Input>
        </form>
        <div className="w-full pt-12">
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Manufacturer</Th>
                  <Th>Type</Th>
                  <Th>Volume</Th>
                  <Th>Location</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                </Tr>
              </Thead>
              <Tbody>
                {itemList?.map((item) => {
                  return (
                    <Tr key={item.barcode}>
                      <Td>{item.manufacturer}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.volume}</Td>
                      <Td>{item.location}</Td>
                      <Td>{item.description}</Td>
                      <Td>${item.price}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default FormComponent;
