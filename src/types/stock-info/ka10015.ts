export interface KA10015Param {
    stk_cd: string;
    strt_dt: string;
}

interface DalyTrdeDtl {
    dt: string;
    close_pric: string;
    pred_pre_sig: string;
    pred_pre: string;
    flu_rt: string;
    trde_qty: string;
    trde_prica: string;
    bf_mkrt_trde_qty: string;
    bf_mkrt_trde_wght: string;
    opmr_trde_qty: string;
    opmr_trde_wght: string;
    af_mkrt_trde_qty: string;
    af_mkrt_trde_wght: string;
    tot_3: string;
    prid_trde_qty: string;
    cntr_str: string;
    for_poss: string;
    for_wght: string;
    for_netprps: string;
    orgn_netprps: string;
    ind_netprps: string;
    frgn: string;
    crd_remn_rt: string;
    prm: string;
    bf_mkrt_trde_prica: string;
    bf_mkrt_trde_prica_wght: string;
    opmr_trde_prica: string;
    opmr_trde_prica_wght: string;
    af_mkrt_trde_prica: string;
    af_mkrt_trde_prica_wght: string;
}

export interface KA10015Response {
    daly_trde_dtl: DalyTrdeDtl[];
    return_code: number;
    return_msg: string;
}
