const express = require('express');
const app = express();
const path = require('path');
const fileHandler = require('fs');
const projects = require('./projects');

//body Parser//

app.use(express.json());

//This is my filter which compares the id parameter to the object id//

const idFilter = (req) => (projects) => projects.id === parseInt(req.params.id);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

//Get all the projects in the object Array//

app.get('/api', (req, res) => res.json(projects));

//Create a new project. This will push a new project to the array which can be done through postman. This will also update the project object//

app.post('/api', (req, res) => {
	const newProject = {
		id: req.body.id,
		title: req.body.title,
		description: req.body.description,
		url: req.body.url
	};
	console.log(newProject.title);
	if (!newProject.title || !newProject.description) {
		return res.status(400).json({ msg: 'Please include a title and email' });
	}

	projects.push(newProject);
	res.json(projects);

	//I am rewriting the project.js file with the newproject items. Please let me know if this is correct or not.//

	fileHandler.writeFile(
		'projects.js',
		'const projects = ' + JSON.stringify(projects) + '; module.exports = projects ',
		(err) => {
			if (err) throw err;
			res.send('File created!');
		}
	);
});

// Get a Single project based on id //
app.get('/api/:id', (req, res) => {
	const found = projects.some(idFilter(req));

	if (found) {
		res.json(projects.filter(idFilter(req)));
	} else {
		res.status(400).json({ msg: `No project with the id of ${req.params.id}` });
	}
});

// Delete project//

app.delete('/api/:id', (req, res) => {
	const found = projects.some(idFilter(req));

	if (found) {
		res.json({
			msg: 'project deleted',
			projects: projects.filter((projects) => !idFilter(req)(projects))
		});

		fileHandler.writeFile(
			'projects.js',
			'const projects = ' +
				JSON.stringify(projects.filter((projects) => !idFilter(req)(projects))) +
				'; module.exports = projects ',
			(err) => {
				if (err) throw err;
				res.send('File created!');
			}
		);
	} else {
		res.status(400).json({ msg: `No project with the id of ${req.params.id}` });
	}
});

//Update the Project//

app.put('/api/:id', (req, res) => {
	const found = projects.some(idFilter(req));

	if (found) {
		projects.forEach((project, i) => {
			if (idFilter(req)(project)) {
				const updProject = { ...project, ...req.body };
				projects[i] = updProject;
				res.json({ msg: 'project updated', updProject });

				fileHandler.writeFile(
					'projects.js',
					'const projects = ' + JSON.stringify(projects) + '; module.exports = projects ',
					(err) => {
						if (err) throw err;
						res.send('File created!');
					}
				);
			}
		});
	} else {
		res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
	}
});

//This ensure the app server is working correctly//

app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.status(500).send('Something broke!');
});

//This listens on localhost port 3000 //
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
