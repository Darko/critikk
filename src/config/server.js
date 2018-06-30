import http from 'http';
import express from './express';

const server = http.createServer(express);

export default server;
