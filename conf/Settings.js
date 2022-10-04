const configs = require('Configurator');
const Settings = JSON.parse(configs);
if (module.exports) {
    module.exports.Settings = Settings;
}
export default Settings;