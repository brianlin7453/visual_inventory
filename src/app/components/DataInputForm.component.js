"use client";
import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
function DataInputForm() {
  const [barcode, setBarcode] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [type, setType] = useState("");
  const [volume, setVolume] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      barcode,
      manufacturer,
      type,
      volume,
      price,
      location,
      description,
    };
    axios({
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:3000/api/item",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }).then((response) => {
      setBarcode("");
      setManufacturer("");
      setType("");
      setVolume("");
      setPrice("");
      setLocation("");
      setDescription("");
    });
  };

  return (
    <div className="pt-24 pl-24 pr-24">
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel className="mb-4">Input Item Info</FormLabel>
          <Input
            value={barcode}
            onChange={(event) => setBarcode(event.target.value)}
            className="mb-6 border-black"
            placeholder="Barcode"
          />
          <Input
            value={manufacturer}
            onChange={(event) => setManufacturer(event.target.value)}
            className="mb-6 border-black"
            placeholder="Manufacturer"
          />
          <Select
            className="mb-6 border-black"
            placeholder="Type"
            onChange={(event) => setType(event.target.value)}
          >
            <option value="Wine">Wine</option>
            <option value="Liquor">Liquor</option>
            <option value="Other">Other</option>
          </Select>
          <Input
            value={volume}
            onChange={(event) => setVolume(event.target.value)}
            className="mb-6 border-black"
            placeholder="Volume"
          />
          <Input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="mb-6 border-black"
            placeholder="Price"
          />
          <Input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="mb-6 border-black"
            placeholder="Location"
          />
          <Input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="mb-6 border-black"
            placeholder="Description"
          />
        </FormControl>
        <Button className="bg-blue-300" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );

  function submitData() {
    console.log("here");
    const payload = {
      barcode,
      volume,
    };
    console.log(payload);
  }
}

export default DataInputForm;
