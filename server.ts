import type { Request, Response, NextFunction } from 'express';
import fs from 'fs/promises';
import path from 'path';
import express from 'express';
import compression from 'compression';
import serveStatic from 'serve-static';
import { createServer as createViteServer } from 'vite';
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

const resolve = (p: string) => path.resolve(__dirname, p);

const getStyleSheets = async () => {
	try {
		const assetpath = resolve('dist/assets');
		console.log(assetpath);
		const files = await fs.readdir(assetpath);
		const cssAssets = files.filter(l => l.endsWith('.css'));
		const allContent = [];
		for (const asset of cssAssets) {
			const content = await fs.readFile(path.join(assetpath, asset), 'utf-8');
			allContent.push(`<style type="text/css">${content}</style>`);
		}
		return allContent.join('\n');
	} catch {
		return '';
	}
};

async function createServer(isProd = process.env.NODE_ENV === 'production') {
	const app = express();
	const stylesheets = await getStyleSheets();
	const vite = await createViteServer({
		server: { middlewareMode: true },
		appType: 'custom',
		logLevel: isTest ? 'error' : 'info',
	});
	app.use(vite.middlewares);
	const requestHandler = express.static(resolve('assets'));
	app.use(requestHandler);
	app.use('/assets', requestHandler);
	// console.log(isProd);
	if (isProd) {
		app.use(compression());
		app.use(
			serveStatic(resolve('dist/client'), {
				index: false,
			})
		);
	}

	app.get('/', async (req: Request, res: Response, next: NextFunction) => {
		const url = req.originalUrl;
		console.log('url', url);
		try {
			// 1. Read index.html
			let template = await fs.readFile(isProd ? resolve('dist/client/index.html') : resolve('index.html'), 'utf-8');
			template = await vite.transformIndexHtml(url, template);
			let productionBuildPath = path.join(__dirname, './dist/server/entry-server.mjs');
			let devBuildPath = path.join(__dirname, './src/client/entry-server.tsx');
			const { render } = await vite.ssrLoadModule(isProd ? productionBuildPath : devBuildPath);
			const appHtml = await render(url);
			const cssAssets = isProd ? '' : stylesheets;
			const html = template.replace(`<!--app-html-->`, appHtml).replace(`<!--head-->`, cssAssets);
			res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
		} catch (e: any) {
			!isProd && vite.ssrFixStacktrace(e);
			vite.ssrFixStacktrace(e);
			next(e);
		}
	});
	app.get('/gracias', async (req: Request, res: Response, next: NextFunction) => {
		const url = req.originalUrl;

		try {
			// 1. Read index.html
			let template = await fs.readFile(isProd ? resolve('dist/client/index.html') : resolve('index.html'), 'utf-8');
			template = await vite.transformIndexHtml(url, template);
			let productionBuildPath = path.join(__dirname, './dist/server/entry-server.mjs');
			let devBuildPath = path.join(__dirname, './src/client/entry-server.tsx');
			const { render } = await vite.ssrLoadModule(isProd ? productionBuildPath : devBuildPath);
			const appHtml = await render(url);
			const cssAssets = isProd ? '' : stylesheets;
			const html = template.replace(`<!--app-html-->`, appHtml).replace(`<!--head-->`, cssAssets);
			res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
		} catch (e: any) {
			!isProd && vite.ssrFixStacktrace(e);
			vite.ssrFixStacktrace(e);
			next(e);
		}
	});
	const port = process.env.PORT || 3100;
	app.listen(Number(port), '0.0.0.0', () => {
		console.log(`App is listening on http://localhost:${port}`);
	});
}

createServer();
