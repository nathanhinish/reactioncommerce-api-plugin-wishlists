import { encodeProductOpaqueId } from "../../xforms/id.js";

export default {
  _id: (node) => encodeProductOpaqueId(node._id),
  entries: (node) => node.entries,
  name: (node) => node.name,
  description: (node) => node.description
};