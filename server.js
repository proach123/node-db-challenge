const express = require('express');

const ProjectRouter = require('./project/projectRouter');
const ResourseRouter = require('./resourse/resourseRouter');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resourses', ResourseRouter)

module.exports = server;