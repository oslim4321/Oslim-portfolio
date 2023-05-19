import Project from "@/model/project";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // const project = await Project.find();
    return "project";
  } else {
    // Handle any other HTTP method
  }
}
