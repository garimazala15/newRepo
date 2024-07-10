declare var Email: {
    send(a: {
      SecureToken: string,
      To: string,
      From: string,
      Subject: string,
      Body: string
    }): Promise<string>;
  };
  