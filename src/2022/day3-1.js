const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello world!");
    res.end();
  })
  .listen(8080);

/**
 * Exercise:
 * - Read “index.html.template” file
 *  - On the request, read user browser information such as device (let’s check if user is mobile, tablet or desktop) and language (in en-gb form) (don’t tell the candidate to use headers, correct ones are “User-Agent” and “Accept-Language”, candidate can use any library to parse “User-Agent”)
 *  - Return read template file with replaced “{{device}}” with user device info and “{{language}}” with user preferred language
 */

const content =
  "qFdBBvtHHfvRlfvsqldvqjPpQmnQmjnjjjTRTLGRNG\nZCWhhCsJCzSJzSbzgsmPTGNNPPNGjgLTLjgn\nWJZsbJMwJcszJcScwhVltFwBFBlqddvFdHDfqq\ncrtTsGTtqFThGQGCrsjTwdNJwpRdnJJwffRClpSf\nPWVBPVHLvHHVgvZWBzmPpnfRSJJRQnSRflRPSNSl\ngmzBzDgzmZQWLDLLgVmDrqGhsscrqDMGhcqtqcFr\nHsbcdVrsbVbcLfPqqQsqqtPj\nmMBFzZRnmFMRBDnDFBGZDGdDqLjtdQtPtgfPfttgtqgq\nBZvZZdJMBFdJhSvhbhchcHll\nGNRSqRfcNTpfGCcqjfzBpDQPWBzgDpQsPWzW\nrrSdnVHlbMdLdBDzgtBtBmQt\nrbFwwnLFLFwlMLrFwFhMVLrGNSTfZTRhfTqjGJRRZTCNcf\nQWTnQCnWNNWmTnSPQwmqDbcscbpcjPjVPbrjpq\nvJhzZNlNNgdzgzJdlGzHHcHDpjsHqrvbVrbvrD\nRzRdRlhLgtCwCWSLnN\nSFTJFTTwTVVSJBnSTdvNNfWbZCZWNZCNNhBv\nsrLrcHDcsjtLcLLcrLctjlcvbDNhmWCvNhZWGZZhNvhZmb\nrclgtMPrrSgVTgJCng\nDbrhDzcDffbzNbZvZWSSqSTNSVWv\ngCPltPmCPglFnPFwtGPhGPwTCTdZZWZVRvWqdRqVVdTdvR\nhLBhlmlstcffBzrpfj\nwFLLmhMfwZLDwmMNRhZwRLDvJgldbJHPdQvcQHHJQPgH\nbjrVrTSSJdQHcVll\nCGCSsCCBpspBrqbSttpbqWmWZRmfFRZhZMNNLFqFLm\nzWGjjBHGjzzTWMjhtDDWtPPlJZPJpvqQrmZTqQQpmr\nRFbVLcBVLRcRVcCsCCqvpCZqmplqQJmPrlvQ\nFLNRRSSRgScSVLLLNdFdwjHjnftBtGMgMjzHgzjWjj\nznVSqnqbqzSbzTHqDDZmlcFcnhDMnDmn\nLtjsvdvLJdjfFwRRCCMlChwCpMcclCcZ\nLgvjjfjFQVgNTgWq\nSJRJRFFCMSsGRMMwtZJRCVTgqgTVgTBCVpjTjmmWlB\nccvnnpnDVqTcBVTV\nvPHprdHdpnzHSMsSrMRZJGws\nGddGrcGNHnGvnCHddvCSWqTSWsTwTWShbHlhhb\ngDPzLRVZgQfpRRFQDDVFDfzhSzsTBqqqnqbhnWTSSlST\nQVFfFgRQQgLtgffZRfpFPfntjrcrjCmtCdMMmjMdJJJNtm\njjmNcpGCNmDqqsBfnZnGGGRLsZ\nlrmlVWlQQtWllgtbQVrWBnZsJgsRLfZLhZBBBffL\nrWMVQtrFlbFlSSMHVSdHHNHdcdDcddzppzzm\nbTpjpjcVTLmphbLppJwqzqwJLqqzzzgRLJ\nsdHNbrvNHrqPvZZZPRww\nbNQCrCNtNsSlhffhVhpVWFCW\nlpNnpMMZZDbNbnBjcrbjvScFmbGj\nwqhdqVqdscrjdLsv\nHQftVqWCfhwqtCCjWwfqzzVPZRJQgMlggZMMMZTNMNTnNRTN\nfvvGbFtVmtTwgtMT\nWcCcClzPCCcczJJScPWWZzBDmwbhBBHSghgDDMTHMDBD\nnWPljWzZWnbcbRsNFjFFdFdVjFsj\nNQrcLNmQGRfGLHHLZgbbnpjZJJJndbgnlv\nDWtThDWtzzhltWTwjbdpvjbgqjgg\nVtSPFWtBPBFSFBWCStshWBmlRfHfMRcfQLQLLlmCrCcN\npbmwqJnqSJVwwDPCjZZzrZfD\nQtssBTvNdNvNtQvQGpGhdjPjDjczZDfjhgPPDcgjgr\nGltptQpMGNNpRWlWFVFHJFHLWH\nZLLsDGGVhZcQQLhrLshrVFwHnWqJnWMnJJJnqfWfGn\njMlPdTlPlgCgFpngFWFnJfpw\nTlTNbdSSTSTmTjPMTCdBPjBMrLDczsZcNrDhRNDRQRLLRVVz\nHDLpBqDVVTvwGDDNRT\nPlVWjfhsPMMmWtlFNTrhrrvCCCTNNbvw\nlsglfgVJmsfMjJfSqSzdZnLgqcnLnp\npfCDJWBpfDffpJLgQJzzVzNrgNgNgNhNzmVr\nZnnGZbGTPZnsnRFdTlbrwdrNzrrmmWwmwVwttH\nGbPGRvTnZljWnpqSMMCjqJQSCf\nZgnFgwggznFrfrwfHhNMMr\npctLCLRhPHBLMLWfBL\nJJcdJcQCCJmQJppmlgndnFslsVnsvghZ\nWpMgTppWGSWWJmJDpJcJJhqm\nzZzjZNHvNjPvNsbZLbRLzsPcqhVJSVttdwhwmdRhtdJRVd\nsLbvvCZCPSSSbbPfNlQQTQGBllCTnMnWQn\nfwbwswddwSbBfDBggMBPDPhHcPWDmhHhmWnWPC\nFQFlzLCzQTlrTTzvltFqFrmhPHjnhhnnchcJWcRRmRRq\nlpLzlFZzCltrTNlTztQLZfSMGBNdSBVwbBNVSMSbVs\nFMmgbTFdgLSgFQdjrRPrQBPDdj\nZqqWRvsfGrrPvvPC\nwZzwnqccRwRNNpRSMztSMMFbgzLTFS\nqTwBPfTfqQDMDrssHdvtRHccHMjR\ngWSZGWzGFhnFFgnhNsRHtRdsVjZcRjHs\njgplhpJJFgnDrrwfqprwDP\nCWhMSRfWhVVnRSZnVVdsLQqQMzGqLBvGMQqczv\nPHbpNwrjJplttvcclLlQzzDszc\nNrJbJrFNNJNPrmwrtbjtNmCfSWfWhSZZfSWCsfShfFVR\nVLhRPLGLRPRSStRRLwfGqfmDwbmqbqqDlD\nrBSFvppnzTbwDwlDcFWm\nMJrnJTMvMsrTsPtshRNPZdSLhL\nBZBrRCrnCQBBnZfGqhGGMMRcthMhMG\nTLjsCdDCPTvNssjdsPsDgsgqGcPHczchtHczWzPWzzlWhG\ngsTpsdNbvNNjNSpsNDTsmCnSVQFmSFwZnQBnmnQQ\nllbsNsWrmbrGbWCNtBjcCFBzQFZBCFjF\nLdSpwgdqSgzwJdRdLMRHLjQQjHjFHctjHBDTZj\ngSppgpSJMhpzwrhblfbhhlWlnW\nDwhTvvsJZWsBnDzPpBLbFp\nGHtNGRGNdzbMBBtmBt\nNljlCSVSHdjGSQRGlCQSCswqfWzhZfTcfzcJvshJ\nlmsGNFsDGqCbFQBbffjjwpzptw\nhRQdvdrvrvSngWnvnHrTMfzfzRtftzwVTwwpzB\nHnSSWrvLJvWJGFDsmFLPDFcQ\nbwwpGphpLghpTvpWphvJlFLJqqltjSjVlSStSR\ncmszZdDdBZzcNcDCDcNsmNMcqVjMJStFRJltVPVrlVPjVJll\nHcdmcCzzzQcHNcsCdpnGnhwGgnRggHvbbR\nCfMBbwBGbMbDCFrDvhFFDT\nmjzRjjRdSmjPnzFZgnnrTT\ncmSsVcHjLHTwMfLBpBpBwM\nwhqqfZzgHvhSzzVNVDbpDbmbVbNpJD\nGcQFntGTCCcCTMCTGBlJsJsDDWpRbWBsJpNS\nFnPcrGFFdddMnCnTqgqgqPHfLjLqgSzz\nzMSzzjssFdGnszRtNftqqwFHbbZw\nRRPLVrgrwHqBqgwt\nrPWmLCTCQlCQQmmrWLrQShJshhzdhhJjcSjlzRds\nlvgvCDfPqLHppqpCCDJncbntttbBtBBVHjwtrB\nTdddszSQsWcngjzVbcVZ\nhRWsTRTGQhNRGhRTFSWmlpgfqlvLmplPqvvGgv\nLbWFLQdWWPwWSjSHPHRfppHHDRpggR\nzmqqNNzlzmnzzNCmVCmtBzpfGsfpBgDgspprcfcfsrRB\nqNNVNJtNmmmNzznVJzvCTDZWhvZZjZFbWQQhFhbZSw\nDjdHqJVVhHVZjhDHPWtDtZLFBRBFmSRTFSbwmRRTffTTJf\nNNznnGlgMQsnQzNclzpfSRSMRmfPMmFRwBwB\nvzrcGcNcPPvHvHPt\nwLCcmZwWTNtZNdMSMGSCnJGGMB\nRFbHsPhVvFPRjlshhrnQnGjQGSdSqJfqnQBM\nHhzVlFHhPwzScmSTgL\nTNlBhDNvNBFpJgpPPpDQ\njjfCdCZZqsCZsbdqPgFGGMRzSFMqQMRS\njnWPtWssCtWcmZbbtstvnrrvhVBhTNNhBHlBlL\nDZwNWPDzPVWbJngrQjrNnrQcMg\nGRRfttLBhhvTvmLmFcFcgFFSnjWrnsrG\nTLthBWtTRLHqhlLLfmhBqVPDJVdPwzJCPPZHwdDdVd\nGGVhrVSMQwQqfVssVvnWFgvgWn\njtlcRBBtQRmpWsjzFCvzWnvF\nQPcRbpppDmNDtPPblZMfhZdDwdMrqSSGrq\nZRrdtBdQvQsWnnfWFZsF\nbJLcMzNDLbMgwfnGMWFv\nlpvhmzNDmDmlNbzbmrVVPrHRCPHQBVCP\nrZllQrsRWrlQswccMVbGbVbTdcQQ\nNtJCntLSHCjznfLTcGGGqWMdWM\njCtzzSFthhSSSjPJrFDlvWrlDZRpwpRZ\nmQmbLjbrLQjLmTtwwWBTTvWjtt\nBHSqdHclHHNFlppNqWPwfwDvTfDPPtCw\nddSGMGHcdcMhMZnBbmbZmgGJJg\nlvvBzvDnlzjfPnfjnQPlldRbVbRqbqqCgsqqVpQQgVqc\nNNFtGNMtTNFmJNGNZtZMwVRTTcsCpVTbbgCbgRhscp\nFGNGZMtNLWmmJWGFWJGLSNtPrPnBfDzzvjnDBzpnvDBLnv\nfwvQRFQvQqwpwNJrwN\nBstDnBjhjBhnshSptpJzWqNppbfr\nCsDjCdZcBCDcjnfDHfhnfggZMGlgQVmgMTRmgVGMMl\nMwlBVqVlsgnmzwJsvjhWZhGPvjvRRWzG\nQNQpQpftHdHHCHGfSpCrQNdSrDRDhchhjvjcPrRRWrPvhZjv\nLtLSCTSGfHGdGwswnqsggssTqV\nqDDCHjzjznTvWshZQWfnZZ\nPFFmmNMMtNMVFtczcFPJNrLhZwQZQsSvvSvWvGQQJQssss\ntFzrrPPNNFlzVrpRTpblRDqjTpDC\nDWDrrBdpmdpBrCgDthdtfcHsqJsCqscqwfsjzHcq\nTNLNFNSTQNQTSnlMcczVJjVzsqLDDfJJ\nTFPZQRvvlMSPPtRWDtmDRWrBGr\nLWGVZdrvWdpLGWRsjPMsHmdHdHldlj\nzJzznChzzzCSfTgMhCPDmlDCbmlsmjDDQj\nnSTTJhJtnShNtzwhgNrGRRWZZRvMWMtVrqGp\nPbPmtNmBbPlqBvqlDJBT\nLpGVDzVpVZqqSTvq\npMnWGLRLRppnGpGndrGPtgDCjMPmbPgCQmPPNN\nsqcZcbZZpcZspcCCRMmznWGWdLWhwDRGTTWggT\nNjFSJgVHrvfVtrGzWdSznDwLSTLn\njFrBNVVjBFNvHrFHBlBFFpMslPgPcpMPmcQPPZCgpP\nfrddqsThtsTfTbPcvhsrbsRLpRBNRpmDpGmRGcRNLpGp\nQWJHCJwWzlHZQZHQCJJRzRqnLDGRGpnGBRnNDN\nCVwHCClJjQgWCZVZQgMwSdthjrqvrSPPhdbqtPhs\nTvdphBBhhhCgdLNNJJJLWz\nfVcsqRVrPcnJWgDnJN\nJlqsRJtssZwqwVtPwltRPsHHbFTwTFbpjHhQjTQbvpTF\ncQSnPDDQJGNzwnNpZb\nRHDrssVRDHRgsRFHRlrVwzzpNGZlfZdppZdwGNZb\nsHCHtDgtCjVVLFChqPMhBCMcSTqB\nhdbQbqcCCQcqFbCbVdcWCQQlRMBtGlRHBtBMpHhpHThZMR\nLLsSLLfgJPrgPnssnmlZtlZpHGHVGfZVtZpl\nPvmvgmvvnzmrSsSLJDqDNzqFDQdDwzWWbV\nHNNjnLbpLGHvWJDhdWWPpWDW\nlVcSNgcSVclhRlPZPRCDCR\ncqmSQrwwrrVSrtQFqVNmFwjQnvjHzBbLLGjfjzHTzvnH\nQmvWVppPHQQvbbvmSHSpPzfzwnWMTZFFzwFMCzLnwT\njGBljlNNjgDtGDrNjjtjqqDRnMzRLnFzCFnMfRfMzCnttF\njqNrrGdJcdgLjqDqBrDQbbmhdQQmmpPbphmbVv\nZHQCggVHHRDWvbfjGptVtLvL\nnnFwnwrDDMShnhFrFLLLpjvPlPGGtLGb\ndcNSMhrrTDCBCsWgCTQW\nHqDDLGtDdCnhfDnwnV\nPmlJsJTPlbdBTzTnzhnnCCWWzV\nlSPjMScggsScgjSMMbqHLFGrRLGHRZZtdrcG\nZVVtNNppdZSdLtCPqnHhqJJFtb\nzgwwQBfwmGgSrDfgrrGBggzHCnbJbqbCJFnqhHBhnHHCqJ\nrvrzfmlRrgDgmrzfggvwzvdjjcccLjMjVcVcsVLjVSZR\ndppcLRHpphchhNhSddjzHzWQWQLtrMsrWQCWCsMZssCZ\nJGfBfJJfBqvGVlVbDBwDBDBfZnrQsMQtssMttssDsQMWZncn\nqPVwlgPBmjpPhcmS\nzGPnzBgPzPnPlHZlDDHnZBNCvrtcjcjmMcFzNcNFmFdc\nqQpfsLTTSspqTfJdmdCtMjdtjvJcmr\nbfQqqSrswLLrfpLTqprfTnDVDVBBbgHPDHnhDPgDbV\nJssTnsdFztZLdNJnNtTsLNZGqlbGFBqrGMHqHBcFBqMFMH\nCCgSfgPSvSfhpShSRppCdfrlqGHGGcHmclmqbbqbqlPc\nwvVSVjQSSQhRVvfQChvZZsdtJstjLNLZDJnLss\nCmfNNNZNqDrnDjMhZM\ngdczzGtdFcddtWQgGGMnVhnjJwnrJFDPTwMP\ndlvcdzdHtzQSLRSfmhLSqv\nZpFFLcHFZZRRmJVZgD\nPzhrtQntzcrjCRJtbtRgBsBRVR\nzdzWfCzhQzlhWfWhlvpFNlpSqcMSHHMv\nNrrMgMhNQhNjQrtqtPtwVtZpggPw\nTfRLndnLFCRFTFbbRDHwpVqqBBwsHwZsfH\nTJFRdLlRThrlcvZcvQ\nscrwRVjbQvQBzsBC\ngMfVqNnVmnCBQDTvdn\nSMqhWqVlmWSmqMVRSJjjpcFrcLpJrR\nHtSQHQntHsHMrtHnGfHQVVzLvSBSVvVVSFNJzzVN\ncmPRmpqlpPmcgTlTpjJNjjVDvDRFNVVBFD\nhlmCpmqmpgqpZTlcdQHFQfbHHZttwMQwtr\nVpWgbgfwCjbftwVPPpGQFQhzTBQTBGPzqFTS\ndbRbDcRrsnsRrLZmLRDZldDZqTNTGqqFFzGGhSTNTFTzNmNT\nMlLdHlDDHrHclMMrCwgHCCwWwCbCCjjg\nGGNLhfDMVcVrcGsT\njSJQFjHbwPFSvQSHwZFvHSHrqCCrrTsqBwNBrcBNsVTsqq\nQjZSjZJZPvNRZJQPnSZbJZRWLfnmgDlmhdhWgWLdMdfmhM\nCgGnzPNggCJtNTgTZTPZzZZvvcDcDDdqDFcJssJDHDqvHq\njhhrrLVlmLRRnRflfVbFHHHqdVsDqcvbHVDb\njWfWwrlmRRnQmPzZNGZPBNCQTB\nNzDDhwNmhvtrGmNCvWRVbcRRVTcHHcVFTbwV\nLgsPlLsQgQdJsLdldtpgFFTMbnFqTcMbHqFcPncq\ndgsJsLLLggljrhtGNNtSjvGm\nptzSrZtzhsmmtPrhLFRFnjnnLMsnfLRL\nHvwVDHwWWgGDGdHgqVDWDMnRnTjFNTNjfLJvRRRRRR\nDwDgWgQbDDDHwBBBWdwQGVHhlhlZZSSmztfcppSBhzZcZp\nCWmWRzlMJqWDWqCJbqDlCBBVLMQHVMGrfMVtQZrsLL\nSnhPdFFPNZsBBdHtVQ\nSSPcFFgnwnSpwvcSjwzCqRzTmJbpJCRBmbbD\nwQbqGWWSqwrbGWWWGjbNMJPfgfnnDmPnPNLfjN\ntJFztRZCvVRCztZFZRVgmMhmgNLfRfnmDPNPhm\nBFCVZzpVFlHCdbQqcTcGlJbbSG\ntttfLPZZQZTlZPHHPWgMVvBnjmvjnjgGBQ\nFzcNDDDrNzprrrshprhFJtVGVnjtjGvnhvVnnjnjGM\nRDqJNszDPfdqPtlT\nQCJdMjCQbdBjSbTHDsbWDDwHTP\nzlvlmqzqGfgdNzLldrHwwPGpWDrPGZWprr\ngfVfRczVqcRzmdcSQMjQSQCSjQCQ\nRhhCGhRBShjjRfpwppFTfFHZHZZD\nqzdqzlnPPctPdmtPdTZbwQvvwqvHHvZpwZ\nnVTVTcsWmWSRhhRVrGVB\nGmshRMnzqRGsPNwMwcrrpcVV\nCDCbFCLvCgfDSFLslgDpwpLtTwwcPtNNtTTprt\nJvSFbSbbFllJlgDvlJbgdRhRdqzBGnzshZnRRRnHBZ\nShJhtcsvvvQbnnsccVTLVTppWqddpVnLWp\nNdzPrPZgPMNNrmzpTzpTCjWfzCpzVL\ndZgHmZRPPZRlZmrPDtDRccvbtQQbJbRS\nwqjLjwhznhBLqLWGfvSlvcmlrJsqrtJTJJ\nPwbpFPQDRCDrDJTrTmvs\ngbZVFbZHgwHbCdpCRMnffNLhWnnzMdzLLW\nRVVGSNTTRlNqHblBNB\nJfwJMvLLZwLsMJwWMJfwLHBqzFlvzpBQcqzblFbBqblq\nwMCZJsgJCCCnsMHrgLLjSPSVTgShtRjTPhRRmt\nlmQSSWdMHHLWgWqD\nZZtVGGGJrJvGVCwfgHNLccmNFFcqtc\nvrCGPhvrTPdRBnsRTmmp\ndDMDDjzCQjwCCcDgjSLLLsLNlmpplN\nFqrHFTFRLCLVFBmS\nJhHJhHRThrfPZPvhnTZZbWdwdwDDWtDzJDtbMtCW\nghwDzJRDwHmPthncSPncLLsPcvnv\nMWCrNTCHrMVjQQMQcSdnpTLnFFdTcnTc\nqbWMfWfNrWVQWfbjVBbqMfwDtqzmhmRRzGhtHhHhRwZh\nfmSmnjTjrlzGlTzJdH\nBrhRRQMrgQvgFFhQQbwpFvGGdZqZJqpJqHVpJGJLHdLJ\nggbDwQMsvsMQrFMFcWSPSCPmSsPfnnmP\ncmNVbMrrrjcHDRcvfW\nwQGdFfSThFsLhhHWvDCWDCJRCCjd\nLtpStGhqrrpnfnpp\nbvcccTqbgvpGndJtgdsgNd\nwDQwQhtQhQRmSmjsJndJdBBJBJnlLS\nhwhmRrzFVjtwzDmrVFrvPCcCMVPPvfqpCCTVVb\njRrRNPNRWjPRWPRQNjQjThTCzBBzDCFBGzgDFGGQ\ndnppLwmwCnvtlqltvtnTGBThGhdFZhgzDzGccD\nMvnqpLlMqCqCHMjWPPHMSHSs\nNNpNNvpvBdtTrMFFMhSSwzjzchzwhzwL\nVVndHqflQZZZgHSLLhjzRSmZRhcR\nglGgnqbQlngnWCGJpJprtrtFrdPPGs\nWqwRjzGtRzZZRRGjWBJzjwmfMTHGGssTTDsrLmmmQLMD\nSNdvSdFlSNNhSPFFcPFclbQQslHmfHTDsTQMLgDTmHQQ\nCNcCFvpdnWpjWwJf\nPVPnVHcnRncGZqbVzHVPnnLbSMjwrzWMjSwDtWwWtwWhwDWz\npTfsQCshCllpglWWSjBMSQSrMrjM\nhvpvppggCpJTvTmshgfsmZRRHqbcLPHZmPLRnmPZ\nLQbhVZZmZhZjBdbGmgHqnHTmvqgnnWHr\nSzCfDFFNRfsSFFMFfvprvpWzqzgqTwHTvp\nCDNDFJgMDSQhjVdPJLQG\nplpdLdpjjrrHJJjLrrHLFdbzzCcvzgFgcwggzPMFvvcMhM\nGRtSBQNsQlMPRzRlzw\nZSTtsmBlmjLLpnpH\nhglGNVSdNSghzSgCBhDFLBMBtFMMFtHtbtLL\nfrQZccRcqGFmFHrJ\nnvfGZwvTwGTfQwvfTwfgnCSlpdnzgzslppCsCV\nsnTSPbQnTTnQgbmsTJsLfZwjffhpLnGRjpGfjL\ndcNWcNHHlNtWHHlCtltWNFNMLZwjpGfpmrZfrFprrRGpwZfp\nHmdNWCmDMVvQPDgqJs\nGGFtSngQLfnSnQffgPnRgFRGRwmRJvwbBbJDwjvTbjrwhJvJ\nWHClslcNNWcqNWlCZdcHsVrThBwBjbhDTDBhrvDZJTwm\nNWVqqcHHNpsNcNVdVlhCMlHQQMQQzLfzQPttFGPMLSLgtF\n";

const getLetterNumber = (letter) => {
  if (letter.length < 1) return 0;

  const charCode = letter.charCodeAt(0);
  let priority = charCode - 96;

  if (priority < 1) {
    priority += 58;
  }
  return priority;
};

const main = () => {
  const rucksacks = content.split("\n");

  let totalPriority = 0;
  for (let i = 0; i < rucksacks.length; i++) {
    const rucksack = rucksacks[i];
    const length = rucksack.length;
    const firstCompartment = rucksack.slice(0, length / 2);
    const secondCompartment = rucksack.slice(length / 2, length);

    if (firstCompartment.length < 1 || secondCompartment.length < 1) continue;

    let foundChar = "";
    for (let j = 0; j < firstCompartment.length; j++) {
      const char = firstCompartment[j];

      if (char) {
        const matchingChar = secondCompartment.search(char);

        if (matchingChar > -1) {
          foundChar = char;
          break;
        }
      }
    }

    totalPriority += getLetterNumber(foundChar);
  }

  console.log(totalPriority);
};

main();