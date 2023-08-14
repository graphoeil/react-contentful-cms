// Imports
import { useEffect, useState } from "react";
import { createClient } from "contentful";

// Client
const client = createClient({
	// in Settings => API keys from Contenful dashboard
	space:process.env.REACT_APP_SPACE_ID,
	environment:'master',
	accessToken:process.env.REACT_APP_ACCESS_TOKEN
});

// Custom Hook
// We can also integrate all these code in the Projects component
const useFetchProjects = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);
	// Get all projects when component mount
	const getData = async() => {
		try {
			const response = await client.getEntries({
				// In Content model => Copy ID from Contenful dashboard
				content_type:'reactContentFulCms'
			});
			const projects = response.items.map((project) => {
				const { fields:{ title, url, image:{ fields:{ file:{ url:imageURL } } } }, sys:{ id } } = project;
				return { title, url, id, imageURL };
			});
			setProjects(projects);
			setLoading(false);
		} catch (error){
			console.log(error);
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	// Return
	return { loading, projects };
};

// Export
export default useFetchProjects;