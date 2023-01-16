import { ClientTDO } from '../../dtos/client.body';
import { hash } from 'bcrypt';

const clientMapper = async ({
  name,
  username,
  email,
  password,
  SSN,
  driver_license,
}: ClientTDO) => {
  const passwordHash = await hash(password, 6);
  return {
    name,
    username,
    email,
    password: passwordHash,
    SSN,
    driver_license,
  };
};

export { clientMapper };
