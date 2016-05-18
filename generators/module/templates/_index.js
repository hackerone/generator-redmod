<% modules.forEach( function(module) { %>export { default as <%= module.name %> } from './<%= module.file %>';
<% }); %>