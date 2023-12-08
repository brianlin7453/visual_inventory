import { prisma } from "../../server/db/client";
import _ from "lodash";
export default async function handler(req, res) {
  const { barcode, manufacturer, volume, type, price, location, description } =
    req.body;
  const barcodeParam = req.query.barcode;
  switch (req.method) {
    case "GET":
      try {
        const data = await prisma.inventory.findUnique({
          where: {
            barcode: barcodeParam,
          },
        });
        if (_.isEmpty(data))
          return res.status(200).send({ message: "No entry found." });
        res.status(200).send({ data: data });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
      break;
    case "POST":
      console.log("dawdwa");
      try {
        await prisma.inventory.create({
          data: {
            barcode: barcode,
            manufacturer: manufacturer,
            volume: volume,
            type: type,
            price: price,
            location: location,
            description: description,
          },
        });
        res.status(200).json({
          Message: "Created new entry.",
          data: {
            barcode: barcode,
            manufacturer: manufacturer,
            volume: volume,
            type: type,
            price: price,
            location: location,
            description: description,
          },
        });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
      break;
    case "PUT":
      try {
        const data = await prisma.inventory.update({
          where: {
            barcode: barcodeParam,
          },
          data: {
            manufacturer: manufacturer,
            volume: volume,
            type: type,
            retail_price: retail_price,
            on_sale: on_sale,
            sale_price: sale_price,
            description: description,
          },
        });
        res.status(200).json({ Message: "Updated entry.", data: data });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
      break;
    case "DELETE":
      try {
        const data = await prisma.inventory.delete({
          where: {
            barcode: barcodeParam,
          },
        });
        res.status(200).json({ Message: "Deleted entry.", data: data });
      } catch (error) {
        console.log(error);
        res.status(500).json(error);
      }
      break;
    default:
      res.status(405).end(); // Method Not Allowed
  }
}
