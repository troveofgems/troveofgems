import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/pro-duotone-svg-icons';
import './MyProjects.scss';

const MyProjects = () => {
	const alertMessage = () => {
		return alert('Check Back Soon! This Project Will Be Available Once I\'ve Finished It!');
	};
	const generateGem = () => {
		return (
			<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
				<div className="project">
					<a href="" className="gemLink">
						{}
						<FontAwesomeIcon icon={faGem} className="projectGem gemGlint"/>
					</a>
				</div>
			</div>
		);
	}
	return (
		<section id="recentProjects">
			<article className="container projectStyleAnchor">
				<div className="projectHeaderContent">
					<h2 className="project__header">Recent Projects</h2>
					<h3 className="project__subHeader">
						Click on any of the gems below to be taken to a project!
					</h3>
				</div>
				<div className="container mt-3">
					<div className="row gemRow">
						<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
							<div className="project">
								<a href="https://github.com/theGemTrove/linuxScripting" className="gemLink">
									Bash Scripts
									<FontAwesomeIcon icon={faGem} className="projectGem bashGem"/>
								</a>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
							<div className="project">
								<a href="https://www.igleague.com" className="gemLink">
									IGLeague
									<FontAwesomeIcon icon={faGem} className="projectGem igleagueGem"/>
								</a>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
							<div className="project">
								<p className="gemLink langDesc-disabled" data-toggle="tooltip" data-placement="top"
									 title="Check Back! This Project Will Be Available Just As Soon As I've Finished It!"
									onClick={alertMessage}
								>
									Metrics
									<FontAwesomeIcon icon={faGem} className="projectGem metricsGem"/>
								</p>
							</div>
						</div>
						<div className="col-xl-3 col-md-4 col-sm-6 col-xs-12">
							<div className="project">
								<a href="https://app.photobucket.com/u/theGemTrove/a/6133af89-7f49-4875-af9d-9770e483f4a9?mode=slideshow" className="gemLink">
									Home Lab
									<FontAwesomeIcon icon={faGem} className="projectGem homeLabGem"/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
};

export default MyProjects;