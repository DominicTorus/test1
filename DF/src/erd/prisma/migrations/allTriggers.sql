

SELECT tam.create_version_triggers(
    'ct001_tgw2',
    ARRAY[
    'mytable',    'hierarchy_table',    'test',    'testchild',    'testchild1',    'test1',    'test2',    'testchild2'        ]
    );
