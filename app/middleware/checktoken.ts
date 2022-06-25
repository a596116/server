import { Context } from "egg"

export default function checktoken(): any {
    return async (ctx: Context, next: () => Promise<any>) => {
        try {
            // 獲取token
            let token = ctx.request.header['token'] as string
            if (token) {
                ctx.app.jwt.verify(token, ctx.app.config.jwt.secret)
                ctx.cookies.set('token', token, {
                    maxAge: 10 * 1000,
                    httpOnly: false,
                    overwrite: true,
                    signed: false
                })
                await next()
            } else {
                ctx.body = {
                    code: 40000,
                    msg: '沒有token'
                }
            }
        } catch (e) {
            ctx.body = {
                code: 40000,
                msg: '沒有token'
            }
        }


    }
}