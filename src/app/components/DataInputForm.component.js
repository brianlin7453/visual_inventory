"use client";
import React, { useState } from "react";
import {
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
function DataInputForm() {
  const [barcode, setBarcode] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [type, setType] = useState("");
  const [volume, setVolume] = useState("");
  const [retail_price, setRetailprice] = useState("");
  const [on_sale, setOn_Sale] = useState("");
  const [sale_price, setSale_Price] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      barcode,
      manufacturer,
      type,
      volume,
      retail_price,
      on_sale,
      sale_price,
      description,
    };
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
            placeholder="Serial Code"
          />
          <Input
            value={manufacturer}
            onChange={(event) => setManufacturer(event.target.value)}
            className="mb-6 border-black"
            placeholder="Manufacturer"
          />
          <Input
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="mb-6 border-black"
            placeholder="Type"
          />
          <Input
            value={volume}
            onChange={(event) => setVolume(event.target.value)}
            className="mb-6 border-black"
            placeholder="Volume"
          />
          <Input
            value={retail_price}
            onChange={(event) => setRetailprice(event.target.value)}
            className="mb-6 border-black"
            placeholder="Retail Price"
          />
          <div className="flex">
            <Checkbox
              value={on_sale}
              onChange={(event) => setOn_Sale(event.target.value)}
              className="mb-6 border-black mt-1"
            />
            <span className="ml-2">On Sale?</span>
          </div>
          <Input
            value={sale_price}
            onChange={(event) => setSale_Price(event.target.value)}
            className="mb-6 border-black"
            placeholder="Sale Price"
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
