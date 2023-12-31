export class SignUpController {
  handle(httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('No name was provided')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('No email was provided')
      }
    }
  }
}
