# Food + Cosmetic Quality API

A serverless API that uses Cloudflare Worker to swiftly evaluate food and cosmetic product quality, providing instant feedback to users.

## Motivation

Sometimes, when I'm at the grocery store, I check a product I like for its nutritional facts and ingredients to assess its healthiness. I understand that others share this curiosity, so I created a fast and efficient solution. This is made possible through Cloudflare's Serverless JavaScript, which can run as close to you as possible (there could be a nice cute, Cloudflare Edge server in your Grocery store!).

## Solution

![basic-traditional-architecture-diagram](basic-traditional-architecture-diagram.png)
_Fig. 1_: Traditional Architecture

## Setup

> - You need to [create](https://dash.cloudflare.com/sign-up) and verify your Cloudflare account if you don't have one.

### Run locally

> - Yarn - `yarn install` and `yarn staging`
> - Npm - `npm run install` and `npm run staging`

### Test

> You can use the **tests/request.http** to play with various request methods.

### Deploy

> - Yarn - `yarn deploy`
> - Npm - `npm run deploy`
