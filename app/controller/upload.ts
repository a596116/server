import { Controller } from 'egg'

import fs from 'fs'
import path from 'path'
import pump from 'mz-modules/pump'
export default class UploadController extends Controller {
    async index() {
        const stream = await this.ctx.getFileStream()
        const folder = this.ctx.params.id

        const filename = stream.filename
        const target = path.join(this.config.baseDir, `app/public/uploads/${folder}`, filename)
        const writeStream = fs.createWriteStream(target)
        await pump(stream, writeStream)
        this.ctx.body = {
            code: 20000,
            data: {
                name: filename,
                // file: `/uploads/${folder}/${filename}` //正式地址
                file: `http://103.61.139.237:7001/uploads/${folder}/${filename}`  //临时服务器地址
                // file: `http://127.0.0.1:7001/uploads/${folder}/${filename}`  //临时服务器地址
            }
        }
    }
}