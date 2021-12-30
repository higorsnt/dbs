declare const commands: Readonly<{
    access: string;
    account: string;
    activate: string;
    add: string;
    admin: string;
    advise: string;
    after: string;
    all: string;
    allRows: string;
    allocate: string;
    alter: string;
    analyze: string;
    and: string;
    any: string;
    archive: string;
    archivelog: string;
    array: string;
    as: string;
    asc: string;
    at: string;
    audit: string;
    authenticated: string;
    authorization: string;
    autoextend: string;
    automatic: string;
    backup: string;
    become: string;
    before: string;
    begin: string;
    between: string;
    bitmap: string;
    block: string;
    body: string;
    by: string;
    cache: string;
    cacheInstances: string;
    cancel: string;
    cascade: string;
    cast: string;
    chained: string;
    change: string;
    check: string;
    checkpoint: string;
    choose: string;
    chunk: string;
    clear: string;
    clone: string;
    close: string;
    closeCachedOpenCursors: string;
    cluster: string;
    coalesce: string;
    column: string;
    columns: string;
    comment: string;
    commit: string;
    committed: string;
    compatibility: string;
    compile: string;
    complete: string;
    compositeLimit: string;
    compress: string;
    compute: string;
    connect: string;
    connectTime: string;
    constraint: string;
    constraints: string;
    contents: string;
    continue: string;
    controlfile: string;
    convert: string;
    cost: string;
    cpuPerCall: string;
    cpuPerSession: string;
    create: string;
    current: string;
    currentSchema: string;
    currenUser: string;
    cursor: string;
    cycle: string;
    dangling: string;
    database: string;
    datafile: string;
    datafiles: string;
    dataobjno: string;
    dba: string;
    dbhigh: string;
    dblow: string;
    dbmac: string;
    deallocate: string;
    debug: string;
    declare: string;
    default: string;
    deferrable: string;
    deferred: string;
    degree: string;
    delete: string;
    deref: string;
    desc: string;
    directory: string;
    disable: string;
    disconnect: string;
    dismount: string;
    distinct: string;
    distributed: string;
    dml: string;
    drop: string;
    dump: string;
    each: string;
    else: string;
    enable: string;
    end: string;
    enforce: string;
    entry: string;
    escape: string;
    except: string;
    exceptions: string;
    exchange: string;
    excluding: string;
    exclusive: string;
    execute: string;
    exists: string;
    expire: string;
    explain: string;
    extent: string;
    extents: string;
    externally: string;
    failedLoginAttempts: string;
    false: string;
    fast: string;
    file: string;
    firstRows: string;
    flagger: string;
    flob: string;
    flush: string;
    for: string;
    force: string;
    foreign: string;
    freelist: string;
    freelists: string;
    from: string;
    full: string;
    function: string;
    global: string;
    globally: string;
    globalName: string;
    grant: string;
    group: string;
    groups: string;
    hash: string;
    hashkeys: string;
    having: string;
    header: string;
    heap: string;
    identified: string;
    idgenerators: string;
    idleTime: string;
    if: string;
    immediate: string;
    in: string;
    including: string;
    increment: string;
    index: string;
    indexed: string;
    indexes: string;
    indicator: string;
    indPartition: string;
    initial: string;
    initially: string;
    initrans: string;
    insert: string;
    instance: string;
    instances: string;
    instead: string;
    intermediate: string;
    intersect: string;
    into: string;
    is: string;
    isolation: string;
    isolationLevel: string;
    keep: string;
    key: string;
    kill: string;
    label: string;
    layer: string;
    less: string;
    level: string;
    library: string;
    like: string;
    limit: string;
    link: string;
    list: string;
    lob: string;
    local: string;
    lock: string;
    locked: string;
    log: string;
    logfile: string;
    logging: string;
    logicalReadsPerCall: string;
    logicalReadsPerSession: string;
    manage: string;
    master: string;
    max: string;
    maxarchlogs: string;
    maxdatafiles: string;
    maxextents: string;
    maxinstances: string;
    maxlogfiles: string;
    maxloghistory: string;
    maxlogmembers: string;
    maxsize: string;
    maxtrans: string;
    maxvalue: string;
    min: string;
    member: string;
    minimum: string;
    minextents: string;
    minus: string;
    minvalue: string;
    mlslabel: string;
    mlsLabelFormat: string;
    mode: string;
    modify: string;
    mount: string;
    move: string;
    mtsDispatchers: string;
    multiset: string;
    national: string;
    needed: string;
    nested: string;
    network: string;
    new: string;
    next: string;
    noarchivelog: string;
    noaudit: string;
    nocache: string;
    nocompress: string;
    nocycle: string;
    noforce: string;
    nologging: string;
    nomaxvalue: string;
    nominvalue: string;
    none: string;
    noorder: string;
    nooverride: string;
    noparallel: string;
    noreverse: string;
    normal: string;
    nosort: string;
    not: string;
    nothing: string;
    nowait: string;
    null: string;
    object: string;
    objno: string;
    objnoReuse: string;
    of: string;
    off: string;
    offline: string;
    oid: string;
    oidindex: string;
    old: string;
    on: string;
    online: string;
    only: string;
    opcode: string;
    open: string;
    optimal: string;
    optimizerGoal: string;
    option: string;
    or: string;
    order: string;
    organization: string;
    oslabel: string;
    overflow: string;
    own: string;
    package: string;
    parallel: string;
    partition: string;
    password: string;
    passwordGraceTime: string;
    passwordLifeTime: string;
    passwordLockTime: string;
    passwordReuseMax: string;
    passwordReuseTime: string;
    passwordVerifyFunction: string;
    pctfree: string;
    pctincrease: string;
    pctthreshold: string;
    pctused: string;
    pctversion: string;
    percent: string;
    permanent: string;
    plan: string;
    plsqlDebug: string;
    postTransaction: string;
    precision: string;
    preserve: string;
    primary: string;
    prior: string;
    private: string;
    privateSga: string;
    privilege: string;
    privileges: string;
    procedure: string;
    profile: string;
    public: string;
    purge: string;
    queue: string;
    quota: string;
    range: string;
    rba: string;
    read: string;
    readup: string;
    rebuild: string;
    recover: string;
    recoverable: string;
    recovery: string;
    ref: string;
    references: string;
    referencing: string;
    refresh: string;
    rename: string;
    replace: string;
    reset: string;
    resetlogs: string;
    resize: string;
    resource: string;
    restricted: string;
    return: string;
    returning: string;
    reuse: string;
    reverse: string;
    revoke: string;
    role: string;
    roles: string;
    rollback: string;
    row: string;
    rownum: string;
    rows: string;
    rule: string;
    sample: string;
    savepoint: string;
    sb4: string;
    scanInstances: string;
    schema: string;
    scn: string;
    scope: string;
    sdAll: string;
    sdInhibit: string;
    sdShow: string;
    segment: string;
    segBlock: string;
    segFile: string;
    select: string;
    sequence: string;
    serializable: string;
    session: string;
    sessionCachedCursors: string;
    sessionsPerUser: string;
    set: string;
    share: string;
    shared: string;
    sharedPool: string;
    shrink: string;
    size: string;
    skip: string;
    skipUnusableIndexes: string;
    snapshot: string;
    some: string;
    sort: string;
    specification: string;
    split: string;
    sqlTrace: string;
    standby: string;
    start: string;
    statementId: string;
    statistics: string;
    stop: string;
    storage: string;
    store: string;
    structure: string;
    successful: string;
    switch: string;
    sysOpEnforceNotNull: string;
    sysOpNtcimg: string;
    synonym: string;
    sysdate: string;
    sysdba: string;
    sysoper: string;
    system: string;
    table: string;
    tables: string;
    tablespace: string;
    tablespaceNo: string;
    tabno: string;
    temporary: string;
    than: string;
    the: string;
    then: string;
    thread: string;
    time: string;
    to: string;
    toplevel: string;
    trace: string;
    tracing: string;
    transaction: string;
    transitional: string;
    trigger: string;
    triggers: string;
    true: string;
    truncate: string;
    tx: string;
    type: string;
    ub2: string;
    uba: string;
    uid: string;
    unarchived: string;
    undo: string;
    union: string;
    unique: string;
    unlimited: string;
    unlock: string;
    unrecoverable: string;
    until: string;
    unusable: string;
    unused: string;
    updatable: string;
    update: string;
    usage: string;
    use: string;
    user: string;
    using: string;
    validate: string;
    validation: string;
    value: string;
    values: string;
    varying: string;
    view: string;
    when: string;
    whenever: string;
    where: string;
    with: string;
    without: string;
    work: string;
    write: string;
    writedown: string;
    writeup: string;
    xid: string;
    year: string;
    zone: string;
}>;
export { commands };
