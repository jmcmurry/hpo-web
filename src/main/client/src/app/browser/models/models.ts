export interface Gene {
    entrezGeneSymbol: string;
    entrezGeneId: number;
    dbDiseases?: Disease[]
    hpoTermName?: Array<string>;
    hpoTermId?: object;
}
export interface Disease {
    db?: string;
    dbId?: string;
    diseaseId?: string;
    diseaseName?: string;
    dbGenes?: Gene[]
    dbObjectId?: string;
    dbName?: string;
    qualifier?: string;
    hpoId?: string;
    dbReference?: string;
    evidenceDescription?: string;
    onsetModifier?: string;
    frequencyModifier?: string;
    with?: string;
    aspect?: string;
    synonym?: string;
    date?: string;
    assignedBy?: string
}
export class EntrezGene {
    uid?: string;
    name?: string;
    maplocation?: string;
    summary?: string;
    otheraliases?:string;
    aliases?: string[];
}
export interface Term {
    name?: string;
    ontologyId?: string;
    id?: string;
    definition?: string;
    altTermIds?: Array<string>;
    comment?: string;
    synonyms?: Array<string>;
    isObsolete?: boolean;
    xrefs?: Array<string>;
    purl?: string;
}