import { commands } from '..';

export const COLUMN_TEMPLATE = `<column_name> <column_type> <column_constraint>`;

export const CONSTRAINTS_TEMPLATE = `${commands.constraint} <constraint_name> <constraint_type> <column_names>`;

export const TABLE_TEMPLATE = `
${commands.create} ${commands.table} <name>(
    <columns>
    <constraints>
);
`;

export const INDEX_TEMPLATE = `${commands.create} <is_unique> ${commands.index}
<index_name> ${commands.on} <table_name> <columns>;`;

export const SEQUENCE_TEMPLATE = `
${commands.create} ${commands.sequence} <sequence_name> <min_value>
<max_value> <start_with_value> ${commands.increment} ${commands.by}
<increment_value> ${commands.cache} <cache_value>;
`;

export const GRANT_TEMPLATE =
  `${commands.grant} <privileges> ${commands.on} <object> ${commands.to} <user>;`;

export const DROP_TEMPLATE = `${commands.drop} <database_object> <object_name>;`;

export const REVOKE_GRANT_TEMPLATE = `${commands.revoke} <privilege> ${commands.on}
<object> ${commands.from} <user>;`;

export const FUNCTION_TEMPLATE = `
${commands.create} <replace> ${commands.function} <object_name> <parameter>
${commands.return} <return_type> <is_or_as> ${commands.begin} <body> ${commands.end} <object_name>;`;

export const FUNCTION_PARAMETER_TEMPLATE = `<parameter_name> <in> <out> <type>`;

export const PACKAGE_TEMPLATE = `${commands.create} <replace> ${commands.package} <object_name>
<is_or_as> <declarations>; ${commands.end} <object_name>;`;