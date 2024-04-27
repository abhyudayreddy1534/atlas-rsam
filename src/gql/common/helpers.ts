


export function toBoolean(soapValue?: string | boolean, defaultValue?: boolean): boolean {
    if (soapValue) {
      if (typeof soapValue === 'string') {
        soapValue = soapValue.toLowerCase();
      }
      return soapValue === true 
        || soapValue === 'true' 
        || soapValue === '1' 
        || soapValue === 'success' 
        || soapValue === 'y' 
        || soapValue === 'yes';
    } else {
      return !!defaultValue;
    }
  }