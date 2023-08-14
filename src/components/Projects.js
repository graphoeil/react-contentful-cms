// Imports
import React from "react";
import useFetchProjects from "../fetchProjects";

// Component
const Projects = () => {

	// Get all projects
	const { loading, projects } = useFetchProjects();

	// Returns
	if (loading){
		return(
			<section className="projects">
				<div className="title">
					<h2>Loading...</h2>
				</div>
			</section>
		);
	}
	return(
		<section className="projects">
			<div className="title">
				<h2>Projects</h2>
				<div className="title-underline"/>
			</div>
			<div className="projects-center">
				{
					projects.map((project) => {
						const { id, title, url, imageURL } = project;
						return(
							<a key={ id } href={ url } target="_blank" rel="noreferrer" className="project">
								<img src={ imageURL } alt={ title } className="img"/>
								<h5>{ title }</h5>
							</a>
						);
					})
				}
			</div>
		</section>
	);

};

// Export
export default Projects;